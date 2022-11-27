<?php

namespace App\Http\Controllers;

use App\Mail\VerificationMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;
use stdClass;

class BuyController extends Controller
{
    //only one product listed
    public function index(Request $request)
    {
        if (!$request->user())
            return redirect()->route('login');
        DB::insert(
            "INSERT INTO cart(user_id, book_id, num, id) VALUES (:u_id, :b_id, :num, 0)",
            [
                'u_id' => $request->user()->id,
                'b_id' => $request->get('id'),
                'num' => 1,
            ]
        );
        $data = DB::select("SELECT * FROM books WHERE id = :id", ['id' => $request->input('id')]);
        $data[0]->num = 1;
        $data[0]->cart_id = 0;
        return Inertia::render(
            'Auth/Payment',
            [
                'books' => $data,
            ]
        );
    }

    //send vertify code
    public function create()
    {
        $code = rand(1000, 9999);
        Storage::put('key.txt', $code);
        return new VerificationMail($code);
    }

    //show the payment methods
    public function show(Request $request)
    {
        if ($request->input('vertify') != Storage::get('key.txt')) {
            throw ValidationException::withMessages([
                'vertify_error' => trans('auth.unveritify'),
            ]);
        }
        $list_id = "";
        foreach ($request->get('alist') as $el) {
            $list_id .= $el['id'] . ",";
        }
        $list_id = rtrim($list_id, ',');
        return Inertia::render(
            'Auth/Payment',
            [
                'books' => DB::select("SELECT b.*, c.num, c.id AS cart_id FROM books b INNER JOIN cart c ON b.id = c.book_id WHERE b.id IN ($list_id)"),
                'paymethod' => true,
            ]
        );
    }

    //save orders and waiting for admin accept
    public function accept(Request $request)
    {
        // dd($request);
        $id = rand(1000000, 9999999);
        $add_d = new stdClass();
        $add_d->province = $request->get('data')['province'];
        $add_d->district = $request->get('data')['district'];
        $add_d->street = $request->get('data')['street'];

        $add = json_encode($add_d);
        DB::insert(
            "INSERT INTO orders(id, user_id, state_order, address, payment_method, phone) VALUES(:id, :user_id, 0, '$add', :p_m, :p)",
            [
                'id' => $id,
                'user_id' => $request->user()->id,
                'p_m' => $request->get('p_m'),
                'p' => $request->get('data')['phone'],
            ]
        );
        $alist = $request->get('alist');
        // dd($alist);
        foreach ($alist as $el) {
            DB::insert(
                "INSERT INTO order_detail(book_id, quan, total_p, order_id) VALUES(:b_id, :num, :tol, :o_id)",
                [
                    'b_id' => $el['id'],
                    'num' => $el['quan'],
                    'tol' => $el['price'] * $el['quan'],
                    'o_id' => $id,
                ]
            );
            DB::delete("DELETE FROM cart WHERE id = :cart_id", ['cart_id' => $el['cart_id']]);
        }
        return redirect()->route('orders');
    }
    //return the bill page
    public function downloadable(Request $request)
    {
        return Inertia::render(
            'Bill',
            ['text' => DB::select(
                "SELECT o.address, o.id, u.name, o.phone, u.email, ot.quan, ot.total_p, b.title FROM orders o INNER JOIN users u ON u.id=o.user_id, order_detail ot INNER JOIN books b ON ot.book_id = b.id WHERE ot.order_id = o.id AND o.user_id = :id",
                ['id' => $request->user()->id]
            )]
        );
    }
    //service for users reuqest a group of products
    public function buyGroup(Request $request)
    {
        if (!$request->get('list_id'))
            return;
        $list_id = "";
        foreach ($request->get('list_id') as $id) {
            $list_id .= $id . ",";
        }
        $list_id = rtrim($list_id, ',');
        return Inertia::render(
            'Auth/Payment',
            [
                'books' => DB::select("SELECT b.*, c.num, c.id AS cart_id FROM books b INNER JOIN cart c ON b.id = c.book_id WHERE b.id IN ($list_id)")
            ]
        );
    }
    //show orders list
    public function showOrders(Request $request)
    {
        return Inertia::render('Auth/Order', ['data' => DB::select("SELECT * FROM orders WHERE user_id = :id", ['id' => $request->user()->id]), 'detail' => false]);
    }
    //show order detail
    public function orderDetail(Request $request)
    {
        return Inertia::render(
            'Auth/Order',
            [
                'detail_data' => DB::select(
                    "SELECT b.title AS title, o.* FROM books b INNER JOIN order_detail o ON b.id = o.book_id WHERE o.order_id=:id",
                    ['id' => $request->get('id')]
                ),
                'detail' => true,
                'data' => DB::select(
                    "SELECT * FROM orders WHERE user_id = :id",
                    ['id' => $request->user()->id]
                ),
            ]
        );
    }
    public function cancelOrder(Request $request)
    {
        DB::delete("DELETE FROM order_detail WHERE order_id = :id", ['id' => $request->get('id')]);
        DB::delete("DELETE FROM orders WHERE id = :id", ['id' => $request->get('id')]);
    }
}
