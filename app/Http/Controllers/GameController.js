'use strict'

class GameController {

  * index(request, response) {
    const games = yield VideoGame.all();

    response.send(games);
  }

  * create(request, response) {
    yield response.sendView('game.create');
  }

  * store(request, response) {
    //
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
