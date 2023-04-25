const {
  DATABASE_HOST, DATABASE_SCHEMA, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT,
} = require('./src/config');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_SCHEMA,
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
};
