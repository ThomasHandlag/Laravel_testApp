<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\BuyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\PasswordController;


Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.update');
        
    Route::get('detail.book.guest', [DetailController::class, 'create'])->name('detail.book');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    Route::get('settings.auth', [SettingController::class, 'create'])->name('show.settings');

    Route::post('upload.user.image', [SettingController::class, 'setImage']);

    Route::post('update.user.infor', [SettingController::class, 'store'])->name('update.infor');

    Route::get('delete.user', [SettingController::class, 'delete'])->name('delete.user');

    Route::get('update.password', [PasswordController::class, 'create']);

    Route::post('save.password', [PasswordController::class, 'store'])->name('save.password');

    //Shop basic routes
    Route::get('detail.book.auth', [DetailController::class, 'show'])->name('detail.book.auth');

    Route::get('shopping.auth', [ShopController::class, 'create'])->name('shopping.auth');

    Route::post('addcart.auth', [BooksController::class, 'store']);

    Route::get('remove.cart', [ShopController::class, 'delete']);

    Route::get('set.num', [ShopController::class, 'update']);


    //Buy route
    Route::get('send.code', [BuyController::class, 'create']);

    Route::post('request.buy', [BuyController::class, 'show'])->name('request.buy');

    Route::get('buy.group', [BuyController::class, 'buyGroup']);

    Route::get('buy.book', [BuyController::class, 'index'])->name('buy.book.auth');

    Route::post('book.success', [BuyController::class, 'accept']);

    Route::get('bill.download', [BuyController::class, 'downloadable'])->name('bill.download');


    //Order route
    Route::get('orders', [BuyController::class, 'showOrders'])->name('orders');

    Route::get('order.detail', [BuyController::class, 'orderDetail']);

    Route::get('cancel.order', [BuyController::class, 'cancelOrder']);

    //comment route
    Route::post('add.comm', [DetailController::class, 'comment']);
});
