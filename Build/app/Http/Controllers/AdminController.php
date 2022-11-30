<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        // dd(Hash::make("86800-56576-56433-49595"));
        return Inertia::render('Admin/Authorize');
    }
    public function check(Request $request)
    {
        // dd($request->get('liencekey'));\
        if (Hash::check($request->get('liencekey'), Storage::get('liencekey.key'))) {
            $data = DB::select("SELECT * FROM books");
            return Inertia::render('Admin/AdminPage', ['data' => $data, 'cr_tool' => 0]);
        }
        throw ValidationException::withMessages([
            'liencekey_error' => trans('auth.liencekey'),
        ]);
    }
    public function reCreate()
    {
        return Inertia::render('Admin/AdminPage', ['data' => DB::select("SELECT * FROM books"), 'cr_tool' => 0]);
    }

    // *************
    //manage library
    // *************
    public function update(Request $request)
    {
        DB::update(
            "UPDATE books SET quantity = :num, price=:price WHERE id=:id",
            [
                'num' => $request->get('num'),
                'id' => $request->get('id'),
                'price' => $request->get('price')
            ]
        );
        return redirect()->route('admin');
    }
    public function showAdd()
    {
        return Inertia::render('Admin/AdminPage', ['cat' => DB::select("SELECT catalog_name, id FROM catalogs"), 'cr_tool' => 5]);
    }
    public function search(Request $request)
    {
        $sk = $request->get('s_key');
        return Inertia::render('Admin/AdminPage', ['data' => DB::select("SELECT * FROM books WHERE title LIKE '%$sk%'"), 'cr_tool' => 0, 'sk' => $sk]);
    }
    public function add(Request $request)
    {
        $title = $request->get('data')['title'];
        $author = $request->get('data')['author'];
        $price = $request->get('data')['price'];
        $des = $request->get('data')['des'];
        $quantity =  $request->get('data')['quantity'];
        $mass = $request->get('data')['mass'];
        $type = $request->get('data')['type'];
        $cat = $request->get('data')['cat_id'];

        $fexten = '.' . $request->file('path_img')->extension();
        $path_img  = $request->file('path_img')->storeAs('images', strtolower(trim($title)) . $fexten, 'local');

        DB::insert("INSERT INTO books(title, author, price, mass, quantity, catalog_id, description, path_img, type_book) VALUES('$title', '$author', $price, '$mass', $quantity, $cat, '$des', '$path_img', '$type')");
        return Inertia::render('Admin/AdminPage');
    }
    public function delete(Request $request)
    {
        // $f = trim(strchr(DB::select("SELECT path_img FROM books WHERE id=:id", ['id' => $request->get('id')])[0]->path_img , "/"), "/");
        // Storage::delete($f);
        DB::delete("DELETE FROM books WHERE id = :id", ['id' => $request->get('id')]);
        return redirect()->route('admin');
    }
    // *************
    //mamage offers
    // *************
    public function create()
    {
        return Inertia::render('Admin/AdminPage', ['dat' => DB::select("SELECT * FROM discount"), 'cr_tool' => 1, 'catalog' => DB::select("SELECT id, catalog_name FROM catalogs")]);
    }
    public function delOffer(Request $request)
    {
        DB::delete("DELETE FROM discount WHERE id=:id", ['id' => $request->get('id')]);
    }
    public function addOffer(Request $request)
    {
        // dd($request);
        $op = $request->get('data')['cata'];
        $da = $request->get('data')['date_apply'];
        $de = $request->get('data')['date_expire'];
        $offer = $request->get('data')['offer'];
        if ($op > 0) {
            $ids = DB::select("SELECT id FROM books WHERE catalog_id= $op");
            foreach ($ids as $id) {
                DB::insert("INSERT INTO discount(book_id, date_applied, date_expired, discount_offer) VALUES($id->id, '$da', '$de', $offer)");
            }
        } else if ($op == -1) {
            $ids = DB::select("SELECT id FROM books");
            foreach ($ids as $id) {
                DB::insert("INSERT INTO discount(book_id, date_applied, date_expired, discount_offer) VALUES($id->id, '$da', '$de', $offer)");
            }
        }
        return redirect()->route('admin.discount');
    }
    // *************
    //manage user 
    // *************
    public function show()
    {
        return Inertia::render(
            'Admin/AdminPage',
            ['attr' => DB::select("SELECT * FROM users"), 'cr_tool' => 3]
        );
    }
    public function delUser(Request $request)
    {
        // $f = trim(strchr(DB::select("SELECT path_img FROM users WHERE id=:id", ['id' => $request->user()->id])[0]->path_img , "/"), "/");
        // Storage::delete($f);
        DB::delete(
            "DELETE FROM users WHERE id=:id",
            ['id' => $request->get('id')]
        );
    }
    // *************
    //manage orders
    // *************
    public function showOrders()
    {
        $sql = "SELECT o.*, u.name, u.email, u.phone FROM orders o, users u WHERE o.user_id = u.id";
        return Inertia::render(
            'Admin/AdminPage',
            ['attr' => DB::select($sql), 'cr_tool' => 4]
        );
    }
    public function delOrders(Request $request)
    {
        DB::delete(
            "DELETE FROM orders WHERE id=:id",
            ['id' => $request->get('id')]
        );
    }

    public function accOrder(Request $request)
    {
        DB::update(
            "UPDATE orders SET state_order = 1 WHERE id=:id",
            ['id' => $request->get('id')]
        );
    }
    // *************
    //Report
    // *************
    public function report()
    {
        $sql = "SELECT sum(total_p) AS tolNum, sum(quan) AS bSell, count(order_id) AS orderNum FROM order_detail";
        return Inertia::render(
            'Admin/AdminPage',
            ['attr' => DB::select($sql)[0], 'cr_tool' => 2]
        );
    }
    //post
    public function showPost()
    {
        return Inertia::render(
            'Admin/AdminPage',
            [
                'data' => [], 'cr_tool' => 6,
                'posts' => DB::select("SELECT * FROM posts")
            ]
        );
    }
    public function write(Request $request)
    {
        // dd($request);
        $file_n = rand(100000, 999999) . "." . $request->file('file')->extension();
        $path = $request->file('file')->storeAs('public', $file_n, 'local');
        DB::insert(
            "INSERT INTO posts(title, path_img, cont) VALUES(:tit, :img, :cont)",
            [
                'tit' => $request->get('tit'),
                'img' => str_replace("public", "storage", $path),
                'cont' => $request->get('cont')
            ]
        );
    }
    public function delPost(Request $request)
    {
        $f = trim(strchr(DB::select("SELECT path_img FROM posts WHERE id=:id", ['id' => $request->get('id')])[0]->path_img, "/"), "/");
        Storage::delete($f);
        DB::delete("DELETE FROM posts WHERE id=:id", ['id' => $request->get('id')]);
    }

    public function searchUser(Request $request)
    {
        $s = $request->get('s_k');
        return Inertia::render('Admin/AdminPage', ['cr_tool' => 3, 'attr' =>  DB::select("SELECT * FROM users WHERE name LIKE '%$s%'"), 's' => $s]);
    }

    public function addCatalog(Request $request)
    {
        DB::insert("INSERT INTO catalogs(catalog_name, key_s) VALUES (:c_name, :k)", ['c_name' => $request->get('name'), 'k' => $request->get('k_s')]);
    }
    public function viewCatForm()
    {
        return Inertia::render(
            'Admin/AdminPage',
            [
                'cat' => DB::select("SELECT catalog_name, id FROM  catalogs"),
                'cr_tool' => 7,
            ]
        );
    }
}
