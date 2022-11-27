<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use function Termwind\render;

class SettingController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Setting');
    }
    public function setImage(Request $request)
    {
        $user_id = $request->get('id');
        $fexten = '.' . $request->file('file')->extension();
        $path = $request->file('file')->storeAs('clients', strtolower(trim($request->get('name'))) . $user_id . $fexten, 'local');
        DB::update('UPDATE users SET path_img = :path_img WHERE id = :id', ['path_img' => $path, 'id' => $user_id]);
        return render('settings.auth');
    }
    public function store(Request $request)
    {
        // dd($request->user()->id);
        DB::update(
            'UPDATE users SET name = :name, email = :email, phone = :phone, gender = :gender  WHERE id = :id',
            [
                'name' => $request->get('name'),
                'id' => $request->user()->id,
                'phone' => $request->get('phone'),
                'email' => $request->get('email'),
                'gender' => $request->get('gender')
            ]
        );
        // return render('settings.auth');
    }

    public function delete(Request $request)
    { 
        // $f = DB::select("SELECT path_img FROM users WHERE id=:id", ['id' => $request->user()->id])[0]['path_img'];
        // Storage::delete($f);
        DB::delete('DELETE FROM users WHERE id = :id', ['id' => $request->get('id')]);
        return render('login');
    }
}
