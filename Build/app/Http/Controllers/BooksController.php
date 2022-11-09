<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BooksController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [];
        $catalogs = DB::select("SELECT * FROM catalogs ORDER BY id");
        $books = DB::select("SELECT * FROM books ORDER BY catalog_id");

        $maps = function ($arr_p, $arr_ch) {
            $books = [];
            foreach ($arr_ch as $ch) {
                if ($arr_p->id === $ch->catalog_id)
                    array_push($books, $ch);
            }
            // $books = array_slice($books, 0, 5);
            $arr_p->books = $books;
            return $arr_p;
        };

        foreach ($catalogs as $catalog) {
            array_push($data, $maps($catalog, $books));
        }
        return DB::connection()->getDatabaseName() ? Inertia::render('Home', ['data' => $data]) : null;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $s_key = strtolower($request->get('s_key'));
        $s_data = DB::select("SELECT * FROM books WHERE title LIKE '%$s_key%'");
        return Inertia::render('Search', ['s_key' => $s_data]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = $request->get('id');
        $book_id = $request->get('book_id');
        $temp = DB::select("SELECT * FROM cart WHERE user_id = $user_id");
        DB::insert("INSERT INTO cart(user_id, book_id) VALUES ($user_id, $book_id)");

        //share cart data
        // $temp = DB::select("SELECT * FROM cart WHERE user_id = $user_id");
        // $accept_cart = "";
        // foreach ($temp as $item) {
        //     $accept_cart .= $item->id . ",";
        // }
        // $accept_cart =  substr_replace($accept_cart, "", -1);
        // $value = DB::select("SELECT * FROM books WHERE id IN($accept_cart)");
        // Inertia::share('cart', $value);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function show(Books $books)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function edit(Books $books)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Books $books)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function destroy(Books $books)
    {
        //
    }
}
