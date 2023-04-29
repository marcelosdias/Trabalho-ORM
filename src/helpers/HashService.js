const bcrypt = require('bcrypt');
const { BRCRYPT_SALT } = require('../config');

class HashService {
  static generateHash(password) {
    const hashedPassword = bcrypt.hashSync(password, BRCRYPT_SALT);

    return hashedPassword;
  }
}

module.exports = HashService;
