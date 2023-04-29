const jwt = require('jsonwebtoken');
const { SECREV_ENV } = require('../config');

class AuthService {
  static async generateToken(params = {}) {
    const token = await jwt.sign(params, SECREV_ENV);

    return token;
  }
}

module.exports = AuthService;
