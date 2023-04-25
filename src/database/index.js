const databaseConfig = require('../../knexfile');

const { NODE_ENV } = require('../config');

const database = require('knex')(databaseConfig[NODE_ENV]);

module.exports = database;
