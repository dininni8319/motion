<?php

use App\Http\Controllers\PublicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::get('/posts', [PublicController::class, 'index'])->name('index');
    Route::post('/add-post', [PublicController::class, 'storePost'])->name('addPost');
    
});

