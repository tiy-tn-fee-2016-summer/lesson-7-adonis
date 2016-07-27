'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class RegisterController {
  * new(req, res) {
    yield res.sendView('register.new');
  }

  * create(req, res) {
    // const email = req.all().email;
    // const password = req.all().password;
    const { email, password } = req.all();

    const newUser = new User({ email, password: yield Hash.make(password) });
    yield newUser.save();
    res.send(newUser);
  }
}

module.exports = RegisterController;
