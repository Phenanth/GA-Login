'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'charlotte2',
	database: 'login'
});

console.log('Database connected.');

module.exports = connection;
