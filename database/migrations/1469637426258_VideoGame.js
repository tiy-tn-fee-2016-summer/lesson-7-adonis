'use strict'

const Schema = use('Schema')

class VideoGameSchema extends Schema {

  up () {
    this.create('video_games', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('video_games')
  }

}

module.exports = VideoGameSchema
