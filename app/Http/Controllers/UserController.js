'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {
  * index(req, res) {
    const users = yield User.all();

    res.send(users);
  }

  * new(req, res) {
    yield res.sendView('users.create');
  }

  * create(req, res) {
    // Get email & password
    const email = req.input('email');
    const password = req.input('password');

    // Save User
    const user = yield User.create({ email, password: yield Hash.make(password) });

    // Redirect back to the last page
    res.redirect('back');
  }
}

module.exports = UserController;
