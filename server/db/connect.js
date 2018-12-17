'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'loginAdmin',
	password: '000000',
	database: 'login'
});

console.log('Database connected.');

module.exports = connection;
