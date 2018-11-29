'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	// user: 'departmentAdmin',
	password: ''
	// database: 'departmentinfo'
});

console.log('Database connected.');

module.exports = connection;
