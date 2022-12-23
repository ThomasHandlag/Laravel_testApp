<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationMail;

class PasswordController extends Controller
{
    /**
     * Display the password reset view.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('ResetPassword', [
            'email' => $request->email,
            'conf' => false,
        ]);
    }

    public function show(Request $request)
    {
        $code = rand(1000, 9999);
        Storage::put('ver_code.txt', $code);
        Mail::to($request->user()->email)
            ->send(new VerificationMail($code));
        return new VerificationMail($code);
    }
    /**
     * Handle an incoming new password request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        if ($request->get('code') != Storage::get('ver_code.txt')) {
            throw ValidationException::withMessages([
                'vertify_error' => trans('auth.unveritify'),
            ]);
        }
        DB::update("UPDATE users SET password = :password WHERE email = :email", ['email' => $request->email, 'password' => Hash::make($request->password)]);

        return redirect()->route('show.settings');
    }
}
