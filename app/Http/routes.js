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
  const { name, complaint } = yield req.session.all();
  yield req.session.forget('name');
  yield req.session.forget('complaint');

  yield res.sendView('contact', { name, complaint });
});

Route.post('/contact', function * (req, res) {
  const name = req.input('name');
  const complaint = req.input('complaint');

  // Store our user inputs in the session
  yield req.session.put({ name, complaint });

  res.redirect('/contact');
});

Route.get('/classmates', function * (req, res) {
  const Database = use('Database');
  const firstName = req.input('firstName');

  const query = {};
  if (firstName) {
    query['first_name'] = firstName;
  }

  // Get all posts
  const classmates = yield Database.table('classmates')
    .where(query).select();
  // Send to user...
  res.send(classmates);

  // Not Using Yield
  // Database.table('classmates').select().then((classmates) => {
  //   res.send(classmates);
  // });
});
