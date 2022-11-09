<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

use function Termwind\render;

class ShopController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user() != null)
            return redirect(route('shopping.auth'));
        return Inertia::render('Shopping');
    }
    public function create(Request $request)
    {
        $user_id = $request->user()->id;
        // $temp = DB::select("SELECT * FROM cart WHERE user_id = $user_id");
        // $accept_cart = "";
        // foreach ($temp as $item) {
        //     $accept_cart .= $item->id . ",";
        // }
        // $accept_cart =  substr_replace($accept_cart, "", -1);
        return Inertia::render('Shopping', ['cart' => DB::select("SELECT b.id, c.id as 'cart_id', b.path_img, b.price, b.title  FROM books b INNER JOIN cart c ON c.book_id = b.id WHERE c.user_id = $user_id")]);
    }
    public function show()
    {
        //
    }
    public function store()
    {
        //
    }
    public function delete(Request $request)
    {
        $id = $request->get('id');
        DB::delete("DELETE FROM cart WHERE id=$id");
        return render('shopping.auth');
    }
}
