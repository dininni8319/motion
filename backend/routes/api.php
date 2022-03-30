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
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'users', 'middleware' => 'CORS'], function ($router){
 
    Route::post('/register', [AuthController::class, 'register'])->name('register.user');
    Route::post('/login', [AuthController::class, 'login'])->name('login.user');
    Route::post('/count', [AuthController::class, 'countUsers'])->name('count.user');
    Route::get('/get-all-users', [AuthController::class, 'getAllUsers'])->name('get-users'); 

    //Private Route
    Route::get('/view-profile', [AuthController::class, 'viewProfile'])->name('profile.user');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout.user');
    
    Route::get('/posts', [PublicController::class, 'index'])->name('index');
    Route::post('/add-post', [PublicController::class, 'storePost'])->name('addPost'); 
});

