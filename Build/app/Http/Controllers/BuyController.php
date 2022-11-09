<?php

namespace App\Http\Controllers;

use App\Mail\VerificationMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    public function create(Request $request)
    {
        // $this->code = rand(1000, 9999);
        
        return new VerificationMail($this->code);
    }

    public function store(Request $request)
    {
        dd($request);

        if ($request->input('veritify') !== "")
            throw ValidationException::withMessages([
                'veritify_error' => trans('auth.unveritify'),
            ]);
        // array_push($this->pay, [$request->input('price'), $request->input('name'), $request->input('address')]);
        return redirect()->route('request.payment');
    }
    public function show()
    {
        return Inertia::render('PaymentMethod', [
            'data' => "none"
        ]);
    }
    public function delete(Request $request)
    {
    }
}
