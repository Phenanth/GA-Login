'use strict'

const Express = require('express');
const router = Express.Router();
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js');
const checkToken = require('../middleware/checkToken.js');

const Login = (req, res) => {

	console.log('Operation: Login, State: 200');
	res.json({
		info: 200,
		success: true
		// path: path,
		// token: createToken(req.body.username, validTime)
	});	

}

module.exports = (router) => {

	router.post('/login', Login);

}
