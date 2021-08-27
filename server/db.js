const dotenv = require("dotenv");
dotenv.config();
// above code can also be done in this way
// require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

module.exports = pool;
