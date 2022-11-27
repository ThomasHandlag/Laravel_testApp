<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user() != null)
            return redirect()->route('shopping.auth');
        return Inertia::render('Shopping', ['cart'=> []]);
    }
    public function create(Request $request)
    {
        $user_id = $request->user()->id;
        return Inertia::render('Shopping', ['cart' => DB::select("SELECT b.*, c.id as 'cart_id', c.num  FROM books b INNER JOIN cart c ON c.book_id = b.id WHERE c.user_id = $user_id")]);
    }
    public function update(Request $request)
    {
        DB::update("UPDATE cart SET num = :num WHERE id = :id", ['num' => $request->get('num'), 'id' => $request->get('id')]);
        // return redirect()->route('shopping.auth');
    }
    // public function store()
    // {
    //     //
    // }
    public function delete(Request $request)
    {
        $id = $request->get('id');
        DB::delete("DELETE FROM cart WHERE id=$id");
        // return redirect()->route('shopping.auth');
    }
}
