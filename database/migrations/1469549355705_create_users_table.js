'use strict';

const Schema = use('Schema');

class CreateUsersTableSchema extends Schema {

  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('email');
      table.string('password');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }

}

module.exports = CreateUsersTableSchema;
