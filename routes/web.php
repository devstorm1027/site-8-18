<?php

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

Route::get('/','SiteController@index');
Route::get('/{vue?}','SiteController@index')->where('vue', '[\/\w\.-]*');


// Route::group(['prefix'=>'api','middleware'=>['isAjax']],function(){
// 	Route::post('create/demo-request','SiteController@api_create_demo_request');
// 	Route::post('create/contact-request','SiteController@api_create_contact_request');
// 	Route::post('create/free-request','SiteController@api_create_free_request');
// 	Route::post('create/subscription-request','SiteController@api_create_subscription_request');
// });

Route::group(['prefix'=>'api'],function(){
	Route::post('create/demo-request','SiteController@api_create_demo_request');
	Route::post('create/contact-request','SiteController@api_create_contact_request');
	Route::post('create/free-request','SiteController@api_create_free_request');
	Route::post('create/subscription-request','SiteController@api_create_subscription_request');
});