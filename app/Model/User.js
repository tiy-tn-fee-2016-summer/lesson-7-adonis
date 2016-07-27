'use strict';

const Lucid = use('Lucid');

class User extends Lucid {

  apiTokens() {
    return this.hasMany('App/Model/Token');
  }

  games() {
    return this.hasMany('App/Model/VideoGame');
  }

}

module.exports = User;
