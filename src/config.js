const dotenv = require('dotenv');

const path = require('path');

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({ path: envPath });

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_HOST: process.env.HOST,
  DATABASE_SCHEMA: process.env.DATABASE_SCHEMA,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_PORT: process.env.DATABASE_PORT,
  BRCRYPT_SALT: process.env.BRCRYPT_SALT || 10,
  SECREV_ENV: process.env.SECREV_ENV,
};
