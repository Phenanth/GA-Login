'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	// user: 'departmentAdmin',
	password: '',
	database: 'login'
});

console.log('Database connected.');

module.exports = connection;
