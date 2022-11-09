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
        return Inertia::render('Detail', ['book' => (DB::select("SELECT * FROM books WHERE id = :id", ['id' => $request->get('id')]))]);
    }
      //render detail of book in authenticated mode
    public function show(Request $request)
    {   $id = $request->get('id');
        $query = "SELECT * FROM books, ";
        return Inertia::render('Detail', ['book' => (DB::select("SELECT * FROM books WHERE id = :id", ['id' => $id]))]);
    }
    public function reply(){

    }
    public function comment(){

    }
}
