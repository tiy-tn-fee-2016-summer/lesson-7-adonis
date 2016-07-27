'use strict'

const Lucid = use('Lucid')

class VideoGame extends Lucid {
  user() {
    return this.belongsTo('App/Model/User');
  }
}

module.exports = VideoGame
