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

let visitors = 1;

Route.get('/visitors', function * (req, res) {
  yield res.sendView('visitors', {
    url: req.url(),
    visitors
  });
  visitors ++;
});

Route.get('/contact', function * (req, res) {
  const name = req.input('name');
  const complaint = req.input('complaint');

  yield res.sendView('contact', { name, complaint });
});
