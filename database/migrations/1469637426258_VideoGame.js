'use strict';

const Schema = use('Schema');

class VideoGameSchema extends Schema {

  up() {
    this.create('video_games', (table) => {
      table.increments();
      table.string('name');
      table.boolean('arcade');
      table.integer('player_count');

      // This gives us a field to link to our users table
      table.integer('user_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('video_games');
  }

}

module.exports = VideoGameSchema;
