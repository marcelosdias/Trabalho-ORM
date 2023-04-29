const { expressjwt: expressJwt } = require('express-jwt');
const { SECREV_ENV } = require('../config');

class Authentication {
  static initialize() {
    return expressJwt({ secret: SECREV_ENV, algorithms: ['HS256'] }).unless({
      path: [
        '/candidates/login',
        '/candidates/register',

      ],
    });
  }
}

module.exports = Authentication;
