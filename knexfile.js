require('dotenv').config()
const {
  DB_USER = 'user',
  DB_PASSWORD = '',
  DB_HOST = 'localhost',
  DB_NAME ='round-robin',
  DB_PORT = 5432,
} = process.env;

const DATABASE_URL = `postgres://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASSWORD)}@${encodeURIComponent(DB_HOST)}:${encodeURIComponent(DB_PORT)}/${encodeURIComponent(DB_NAME)}`

module.exports = {
  development: {
    client: 'pg',
    connection: DATABASE_URL
  },
  production: {
    client: 'pg',
    connection: DATABASE_URL
  },
  DATABASE_URL
};
