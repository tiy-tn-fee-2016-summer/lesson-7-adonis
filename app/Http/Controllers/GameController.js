'use strict'

const VideoGame = use('App/Model/VideoGame');

class GameController {

  * index(request, response) {
    const games = yield VideoGame.with('user').fetch();

    yield response.sendView('game.index', { games: games.toJSON() });
  }

  * create(request, response) {
    yield response.sendView('game.create');
  }

  * store(request, response) {
    // Grab values from the input
    const { name, arcade, player_count } = request.all();

    // Get the logged in user for the session
    const user = yield request.auth.getUser();

    // Save a new game related to our user with values from our input
    const game = yield user.games().create({ name, arcade, player_count });

    yield request.with({ success: 'Game saved!' }).flash();

    response.redirect('/games');
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = GameController
