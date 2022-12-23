<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DetailController extends Controller
{
    /**
     * @return Illuminate\Http\Response
     */

    //render detail of book in guest mode
    public function create(Request $request)
    {
        return Inertia::render(
            'Detail',
            [
                'book' => DB::select("SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON d.book_id = b.id WHERE b.id = :id", ['id' => $request->get('id')]),
                'com' => DB::select(
                    "SELECT c.*, u.name, u.path_img FROM comments c INNER JOIN users u ON u.id = c.user_id WHERE book_id = :id",
                    ['id' => $request->get('id')]
                )
            ]
        );
    }
    //render detail of book in authenticated mode
    public function show(Request $request)
    {
        return Inertia::render(
            'Detail',
            [
                'book' => (DB::select(
                    "SELECT b.*, d.discount_offer FROM books b LEFT JOIN discount d ON d.book_id = b.id WHERE b.id = :id",
                    ['id' => $request->get('id')]
                )),
                'com' => DB::select(
                    "SELECT c.*, u.name, u.path_img FROM comments c INNER JOIN users u ON u.id = c.user_id WHERE book_id = :id ORDER BY date_comt",
                    ['id' => $request->get('id')]
                )
            ]
        );
    }

    public function comment(Request $request)
    {
        DB::insert(
            "INSERT INTO comments(book_id, user_id, content) VALUES(:b_id, :u_id, :cont)",
            [
                'b_id' => $request->get('b_id'),
                'u_id' => $request->user()->id, 
                'cont' => $request->get('cont')
            ]
        );
    }
}
