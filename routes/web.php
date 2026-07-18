<?php

use Illuminate\Support\Facades\Route;





// ! All route return to router in Vue use it in last line here ok
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
