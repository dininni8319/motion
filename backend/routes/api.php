<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PublicController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'users', 'middleware' => 'CORS'], function ($router){
 
    Route::post('/register', [AuthController::class, 'register'])->name('register.user');
    Route::post('/login', [AuthController::class, 'login'])->name('login.user');
    Route::post('/count', [AuthController::class, 'countUsers'])->name('count.user');
    Route::get('/get-all-users', [AuthController::class, 'getAllUsers'])->name('get-users'); 

    //Private Route
    Route::get('/view-profile', [AuthController::class, 'viewProfile'])->name('profile.user');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout.user');
    
    Route::get('/posts', [PublicController::class, 'index'])->name('index');
    Route::get('/get-comments', [PublicController::class, 'getAllComments'])->name('getAllComments');
    Route::post('/add-comment/{post_id}', [PublicController::class, 'storeComment'])->name('addComment'); 
    Route::post('/add-post', [PublicController::class, 'storePost'])->name('addPost'); 
    Route::post('/complete-profile', [PublicController::class, 'completeProfile'])->name('completeProfile'); 
});

