require('dotenv').config();
const knex = require('knex');

const { DATABASE_URL } = require('./knexfile');

const knexCredentials = {
  client: "pg",
  connection: DATABASE_URL,
  useNullAsDefault: true,
}

module.exports = knex(knexCredentials);
