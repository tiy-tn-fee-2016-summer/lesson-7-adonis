'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('welcome');

/**
 * App should respond to GET requests to "/register"
 * by using the "new" method from the "RegisterController"
 */
Route.get('/register', 'RegisterController.new');
/**
 * App should respond to POST requests to "/register"
 * by using the "create" method from the "RegisterController"
 */
Route.post('/register', 'RegisterController.create');
