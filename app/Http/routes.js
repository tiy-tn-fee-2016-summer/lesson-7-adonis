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

/**
 * App should respond to GET requests to "/login"
 * by using the "new" method from the "LoginController"
 */
Route.get('/login', 'LoginController.new');
/**
 * App should respond to POST requests to "/login"
 * by using the "create" method from the "LoginController"
 */
Route.post('/login', 'LoginController.create');

Route.resource('/games', 'GameController');
// ^ replaces all of these routes
// Route.get('/games', 'GameController.index');
// Route.get('/games/new', 'GameController.create');
// Route.post('/games', 'GameController.store');
// Route.get('/games/:id', 'GameController.show');
// Route.get('/games/:id/edit', 'GameController.edit');
// Route.put('/games/:id', 'GameController.update');
// Route.delete('/games/:id', 'GameController.destroy');
