<?php

namespace App\Http\Controllers;

use App\Mail\VerificationMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;

class BuyController extends Controller
{
    //create a new payment page
    public function index(Request $request)
    {
        return Inertia::render('Auth/Payment', ['book' => DB::select("SELECT * FROM books WHERE id = :id", ['id' => $request->input('id')])]);
    }
    //verify payment
    public function create() //Request $request
    {
        $code = rand(1000, 9999);
        Storage::put('key.txt', $code);
        return new VerificationMail($code);
    }

    public function show(Request $request)
    {
        // dd($request->input('data')['vertify']);
        if ($request->input('data')['vertify'] != Storage::get('key.txt')) {
            throw ValidationException::withMessages([
                'vertify_error' => trans('auth.unveritify'),
            ]);
        }
        return redirect()->route('request.buy');
    }
    public function store(Request $request)
    {

    }
    public function delete(Request $request)
    {
    }
}
