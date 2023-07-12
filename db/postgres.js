const {Pool} = require('pg');
require('dotenv').config()

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWRD,
  port: process.env.DBPORT,
  host: process.env.HOST,
});

module.exports=pool;
