'use strict';

class LoginController {
  * new(req, res) {
    yield res.sendView('login.new');
  }

  * create(req, res) {
    // const email = req.all().email;
    // const password = req.all().password;
    const { email, password } = req.all();

    try {
      yield req.auth.attempt(email, password);
      res.send('IT WORKS');
    } catch (e) {
      // Send back all of the user input
      yield req.withAll()
        // And add an error message to show from the view
        .andWith({ error: 'The email and password do not match' })
        // Only make these values available to the next request in this session
        .flash();
      res.redirect('back');

    }
  }
}

module.exports = LoginController;
