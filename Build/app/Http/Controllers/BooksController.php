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
        $books = DB::select("SELECT b.*, d.discount_offer  FROM books b LEFT JOIN discount d ON b.id = d.book_id");

        $maps = function ($arr_p, $arr_ch) {
            $books = [];
            foreach ($arr_ch as $ch) {
                if ($arr_p->id === $ch->catalog_id)
                    array_push($books, $ch);
            }
            $books = array_slice($books, 0, 5);
            $arr_p->books = $books;
            return $arr_p;
        };

        foreach ($catalogs as $catalog) {
            array_push($data, $maps($catalog, $books));
        }
        // dd($best);
        return DB::connection()->getDatabaseName() ? Inertia::render(
            'Home',
            [
                'data' => $data,
                'best_sale' => DB::select(
                    "SELECT * FROM (SELECT b.* FROM books b INNER JOIN order_detail o ON o.book_id = b.id GROUP BY b.id, b.title, b.price, b.author, b.quantity, b.price, b.path_img, b.catalog_id, b.description, b.type_book, b.mass, b.created_at ORDER BY sum(quan) DESC) AS dbook LIMIT 1"
                ),
                'news' => DB::select("SELECT * FROM posts ORDER BY date_post LIMIT 2")
            ]
        ) : null;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $s_key = strtolower($request->get('s_key'));
        $s_data = DB::select("SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON b.id = d.book_id WHERE title LIKE '%$s_key%'");
        return Inertia::render('Search', ['s_key' => $s_data]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $s_key = strtolower($request->get('s_key'));
        $s_data = DB::select("SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON b.id = d.book_id WHERE title LIKE '%$s_key%'");
        return Inertia::render('Search', ['s_key' => $s_data]);
    }
    /**
     * Update or add new books to cart section.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = $request->get('id');
        $book_id = $request->get('book_id');
        $temp = DB::select("SELECT book_id FROM cart WHERE user_id = $user_id AND book_id = $book_id");
        // dd($temp);
        if (count($temp) < 1)
            DB::insert(
                "INSERT INTO cart(user_id, book_id, num) VALUES ($user_id, $book_id, :num)",
                ['num' => $request->get('num')]
            );
        else {
            $cr_num = DB::select("SELECT num FROM cart WHERE user_id = $user_id AND book_id = $book_id")[0]->num;
            DB::update(
                "UPDATE cart SET num = :num WHERE book_id = :book_id",
                ['book_id' => $book_id, 'num' => ($request->get('num') + $cr_num)]
            );
        }

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
     * @return \Illuminate\Http\Response
     */
    public function sortByPrice(Request $request)
    {
        $s_key = $request->get('s_key');
        $sql = DB::select(
            "SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON b.id = d.book_id WHERE price >= :sta AND price <= :en AND title LIKE '%$s_key%'",
            [
                'sta' => $request->get('from_p'),
                'en' => $request->get('to_p'),
            ]
        );
        return Inertia::render('Search', ['s_key' => $sql]);
    }
    /*
    private function fillByCatalog(){
        $data = [];
        $catalogs = DB::select("SELECT * FROM catalogs ORDER BY id");
        $books = DB::select("SELECT * FROM books ORDER BY catalog_id");

        $maps = function ($arr_p, $arr_ch) {
            $books = [];
            foreach ($arr_ch as $ch) {
                if ($arr_p->id === $ch->catalog_id)
                    array_push($books, $ch);
            }
            $books = array_slice($books, 0, 5);
            $arr_p->books = $books;
            return $arr_p;
        };

        foreach ($catalogs as $catalog) {
            array_push($data, $maps($catalog, $books));
        }
        return $data;
    }*/
    /**
     * Show the book by their catalog name.
     *
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function filterByCatalog(Request $request)
    {
        $data = [];
        $books = DB::select("SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON b.id = d.book_id WHERE catalog_id != :catalog_id", ['catalog_id' => $request->get('catalog_id')]);
        $catalogs = DB::select("SELECT * FROM catalogs WHERE id != :catalog_id", ['catalog_id' => $request->get('catalog_id')]);
        $select_cat = DB::select("SELECT * FROM catalogs WHERE id = :catalog_id", ['catalog_id' => $request->get('catalog_id')]);
        // dd($select_cat);
        $select_books = DB::select("SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON b.id = d.book_id WHERE catalog_id = :catalog_id", ['catalog_id' => $request->get('catalog_id')]);
        $select_cat[0]->books = $select_books;
        // dd($select_cat);
        array_push($data, $select_cat[0]);

        $maps = function ($arr_p, $arr_ch) {
            $books = [];
            foreach ($arr_ch as $ch) {
                if ($arr_p->id === $ch->catalog_id)
                    array_push($books, $ch);
            }
            $books = array_slice($books, 0, 5);
            $arr_p->books = $books;
            return $arr_p;
        };
        foreach ($catalogs as $catalog) {
            array_push($data, $maps($catalog, $books));
        }
        // dd($data);
        return Inertia::render(
            'Home',
            [
                'data' => $data,
                'best_sale' => DB::select(
                    "SELECT * FROM (SELECT b.* FROM books b INNER JOIN order_detail o ON o.book_id = b.id GROUP BY b.id, b.title, b.price, b.author, b.quantity, b.price, b.path_img, b.catalog_id, b.description, b.type_book, b.mass, b.created_at ORDER BY sum(quan) DESC) AS dbook LIMIT 1"
                ),
                'news' => DB::select("SELECT * FROM posts ORDER BY date_post LIMIT 2")
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Books  $books
     * @return \Illuminate\Http\Response
     */
    public function showPost(Request $request)
    {
        return Inertia::render('About', ['news' => DB::select("SELECT * FROM posts ORDER BY date_post")]);
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
