const { Pool } = require('pg')
const dotenv = require('dotenv');
dotenv.config()

const pool = new Pool()

module.exports = pool