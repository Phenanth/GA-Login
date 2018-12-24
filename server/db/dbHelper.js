'use strict'

const Express = require('express');
const router = Express.Router();
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js');
const checkToken = require('../middleware/checkToken.js');

var speakeasy = require('speakeasy')
var QRCode = require('qrcode')

var salt = "abcdefghijklmnopqrstuvwxyz";
var txt = "123456";

var secret = '';

const Login = (req, res) => {
	var crypto = require('crypto');
	var md5 = crypto.createHash('md5');

	let validTime = '10s';
	let queryString = {
		sql: 'SELECT user_password AS solution FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};

	if (req.body.willStore) {
		validTime = '168h';
	}
	
	console.log(req.body);

	md5.update(req.body.password);
	md5 = crypto.createHash('md5');

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error);
		}
		
		if (results) {
			// 防止code: 'ER_NOT_SUPPORTED_AUTH_MODE'类型错误
			if (!results[0]) {
				// 用户不存在
				console.log('Operation: Login, State: 404, Message: User not existed.');
				res.json({
					info: 404,
					success: false,
					message: 'User not exists.'
				});
			} else {
				// 如果有匹配的用户
				md5.update(req.body.password + salt);
				if (md5.digest('hex') == results[0].solution) {
					// 密码正确
					console.log('Operation: Login, State: 200');
					res.json({
						info: 200,
						success: true,
						path: '/user/userinfo',
						token: createToken(req.body.username, validTime)
					});	
				} else {
					// 密码错误
					console.log('Operation: Login, State: 304, Message: Wrong password.');
					res.json({
						info: 304,
						success: false,
						message: 'Wrong password.'
					});
				}
			}
		} else {
			console.log('Operation: Login, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	});

};
/*Register*/
const Register = (req, res) => {
	var crypto = require('crypto');
	var md5 = crypto.createHash('md5');
	md5.update(req.body.password);
	md5 = crypto.createHash('md5');
	md5.update(req.body.password + salt);
	req.body.password = md5.digest('hex');

	let validTime = '10s';
	let queryString = {
		sql: 'SELECT user_id FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};
	let queryStringInsert = {
		sql: 'INSERT INTO user (`user_id`, `user_password`) VALUES (?)',
		values: [
			[req.body.username, req.body.password]
		],
		timeout: 40000
	};
	
	console.log(req.body);

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error);
		}
		
		if (results) {
			// 防止code: 'ER_NOT_SUPPORTED_AUTH_MODE'类型错误
			if (results[0]) {
				// 用户已注册
				console.log('Operation: Register, State: 404, Message: User already exists.');
				res.json({
					info: 404,
					success: false,
					message: 'The user you were trying to create already exists.'
				});
			} else {
				// 如果没有被注册将相关信息插入数据库
				db.query(queryStringInsert, function(error, results, fields) {
					if (error) {
						console.log(error);
					}
					res.json({
						info: 200,
						success: true
					});
				});
			}
		} else {
			console.log('Operation: Register, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	});

};

const GetUserData = (req, res) => {
	let queryString = {
		sql: 'SELECT user_id, user_sex, user_secret FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};
	db.query(queryString, function(error, results, fields) {
		if (error) {
			console.log(error)
		}

		if (results) {
			if (results[0]) {
				res.json({
					info: 200,
					success: true,
					user_id: results[0].user_id,
					user_sex: results[0].user_sex,
					user_secret: results[0].user_secret
				});
			}
		}

	});
};

// update user set user_secret=null where user_id='alice';

const SendVerify = (req, res) => {

	secret = speakeasy.generateSecret({length: 20});

	console.log(secret.base32);

	QRCode.toDataURL(secret.otpauth_url, function (err, image_data) {
		
		if (err) {
			console.log(err)
		}
		
		res.json({
			image: image_data
		});

	});
	
};

const VerifyFirst = (req, res) => {

	let queryString = {
		sql: 'UPDATE user SET user_secret=? WHERE user_id=?',
		values: [
			[secret],
			[req.body.username]
		],
		timeout: 40000
	};

	req.json({
		message: 'testing.'
	});

};

module.exports = (router) => {

	router.post('/login', Login);

	router.post('/register', Register);

	router.post('/getUserData', GetUserData);

	router.get('/sendVerify', SendVerify);

	router.post('/verify-first', VerifyFirst)

}
