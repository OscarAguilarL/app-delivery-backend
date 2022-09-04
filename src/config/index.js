const promise = require('bluebird');

const options = {
  promiseLib: promise,
  query: (e) => {},
};

const pgp = require('pg-promise')(options);

const types = pgp.pg.types;

types.setTypeParser(1114, (stringValue) => stringValue);

const databaseConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db = pgp(databaseConfig);

module.exports = db;