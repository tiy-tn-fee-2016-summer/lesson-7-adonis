'use strict';

class RegisterController {
  * new(req, res) {
    yield res.sendView('register.new');
  }
}

module.exports = RegisterController;
