<!DOCTYPE html>
<template>
	<div class="login container-fluid">

		<div class="hd navbar-header row">
			<img class="col-md-2" height="25px" width="35px" src="../../static/svg/account-filling.svg"/>
			<span class="header col-md-2">LOGIN</span>
		</div>

		<div class="cnt">
			<form>
				<div class="input form-group">
					<label for="input-id">
						<img class="left-float" height="18" width="35" src="../../static/svg/account.svg"/>
					</label>
					<input type="text" class="form-control" placeholder="ID" v-model="username">
				</div>
				<div class="input form-group">
					<label for="input-pw">
						<img class="left-float" height="18" width="35" src="../../static/svg/password.svg"/>
					</label>
					<input type="password" class="form-control" placeholder="Password" v-model="password">
				</div>
	
				<div class="checkbox">
					<label>
						<input type="checkbox" value="true" v-model="willStore" class="demo-radio demo-radioInput">
						<span class="demo-checkbox demo-radioInput"></span>Remember me in 7 days.
					</label>
				</div>
				<button type="button" class=" btn btn-login" v-on:click="login()">Login</button>
			</form>
		</div>
		<div class="ft" >
			<img width="32px" class="git" onclick="window.open('https://github.com/Phenanth/GA-Login');" src="../../static/svg/github5.svg"/>
		</div>
		
	</div>
</template>
<script>
import api from '../api.js'
import router from '../router'
export default {
	name: 'Login',
	data: function () {
		return {
			username: '',
			password: '',
			role: '',
			willStore: false
		}
	},
	methods: {
		login: function () {
			if (this.username != '' && this.password != '' && this.role != '') {
				let opt = {
					username: this.username,
					password: this.password,
					role: this.role,
					willStore: this.willStore
				}
				api.doLogin(opt).then(({
					data
				}) => {
					if (data.info == 200) {
						// Authentificated role will be transfered from the server, this is just the test version.
						let user = {
							token: data.token,
							username: this.username,
							role: this.role
						}
						store.dispatch('storeToken', JSON.stringify(user))
						this.$router.push(data.path)
					} else {
						alert(data.message)
					}
				})
			} else {
				alert('Fill the blanks please.')
			}
		},
		goBack: function () {
			router.push('/')
		}
	}
}
</script>
<style>

img {
	margin-right: 20px;
	margin-left: 20px;
}

img:hover {
	cursor: pointer;
}

h1 {
	display: inline-block;
}

.login {
	display: flex;
	flex-direction: column;
	width: 70%;
	color: #505050;
	height: 100%;
}

.btn-primary {
	width: 170px;
	height: 40px;
	line-height: 26px;
	border: 1px solid #0EA8A3;
	background-color: #0EA8A3;
}

.btn-primary:hover {
	border: 1px solid #0c8a86;
	background-color: #0c8a86;
}

html, body {
	min-width: 992px;
	margin: 0px;
}

input[type="radio"], input[type="checkbox"] {
	display: none;
}

label > img {
	margin-left: 0px;
}

.login {
	display: flex;
	flex-direction: column;
	width: 70%;
	color: #505050;
	height: 100%;
}

.header {
	font-size: 22px;
}

.cnt {
	padding: 40px;
	display: flex;
	justify-content: center;
	height: 500px;
}

.input {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 300px;
	margin: 30px;
}

.left-float {
	float: left;
}

.btn-login {
	margin-top: 30px;
	width: 300px;
	color: #E5F5F5;
	background-color: #0EA8A3;
}

.btn-login:hover {
	color: white;
	background-color: #0c8a86;
}

.btn-login:focus {
	color: #E5F5F5;
	background-color: #0EA8A3;
}

.btn-goBack {
	display: flex;
	width: 60px;
	float: right;
	align-items: center;
	justify-content: center;
	height: 30px;
	margin-top: 2px;
	margin-right: 2px;
	padding-left: 20px;
	padding-right: 20px;
	background-color: #0EA8A3;
}

.btn-goBack:hover {
	color: white;
	cursor: pointer;
	background-color: #0c8a86;
}

.btn-goBack:hover img {
	display: none;
}

.btn-goBack:hover div:after {
	content: "Go Back";
}

.ft {
	display: flex;
	color: #2c3e50;
	justify-content: flex-end;
	bottom: 0px;
}

/* Input styles */

.radio {
	display:inline-block
}

.demo-label {
	margin:10px 10px 0 0;
	display:inline-block;
}

.demo-radioInput {
	background-color: #fff;
	border: 1px solid #A0A0A0;
	border-radius: 100%;
	display: inline-block;
	height: 16px;
	margin-right: 10px;
	margin-top: -1px;
	vertical-align: middle;
	width: 16px;
	line-height: 1;
}

.demo-radio:checked + .demo-radioInput:after {
	background-color: #0EA8A3;
	border-radius: 100%;
	content: "";
	display: inline-block;
	height: 12px;
	margin: 1.15px;
	width: 12px;
}

.demo-checkbox.demo-radioInput,.demo-radio:checked + .demo-checkbox.demo-radioInput:after {
	border-radius: 0;
}

/* Others */

.login > .ft {
	position: fixed;
	float: right;
	left: 80%;
	bottom: 3%;
}

.git {
	color: #0EA8A3;
	font-size: 16px;
	line-height: 36px;
	text-decoration: none;
}

.git:hover {
	color: #0c8a86;
	cursor: pointer;
	text-decoration: none;
}

</style>