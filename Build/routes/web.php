<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\ShopController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BooksController::class, 'index'])->name('home');

Route::get('shopping', [ShopController::class, 'index']);

Route::get('about', [BooksController::class, 'showPost'])->name('about');


Route::get('search', [BooksController::class, 'create']);

Route::get('filter.catalog', [BooksController::class, 'filterByCatalog']);

Route::get('search.price', [BooksController::class, 'sortByPrice']);

// admin route
Route::get('/admin', [AdminController::class, 'index']);
Route::get('admin.manif', [AdminController::class, 'check'])->name('admin');
Route::get('admin.reload', [AdminController::class, 'reCreate']);

Route::get('admin.update.book', [AdminController::class, 'update']);
Route::get('admin.del.book', [AdminController::class, 'delete']);
Route::post('admin.add.book', [AdminController::class, 'add']);
Route::get('admin.add', [AdminController::class, 'showAdd']);
Route::get('s.book', [AdminController::class, 'search']);
Route::get('s.user', [AdminController::class, 'searchUser']);
Route::get('write.post', [AdminController::class, 'showPost']);
Route::post('add.post', [AdminController::class, 'write']);
Route::get('del.post', [AdminController::class, 'delPost']);

Route::get('admin.discount', [AdminController::class, 'create'])->name('admin.discount');
Route::get('admin.add.offer', [AdminController::class, 'addOffer']);
Route::get('admin.del.offer', [AdminController::class, 'delOffer']);

Route::get('admin.users', [AdminController::class, 'show']);
Route::get('admin.user.del', [AdminController::class, 'delUser']);

Route::get('admin.orders', [AdminController::class, 'showOrders']);
Route::get('admin.del.order', [AdminController::class, 'delOrder']);
Route::get('admin.acc.order', [AdminController::class, 'accOrder']);

Route::get('admin.report', [AdminController::class, 'report']);

Route::get('admin.cat', [AdminController::class, 'viewCatForm']);
Route::get('admin.add.catlog', [AdminController::class, 'addCatalog']);
//

Route::get('search.back', [BooksController::class, 'search']);

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
