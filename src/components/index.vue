<!DOCTYPE html>
<template>
	<div class="home">
		<div class="hd">
			<img class="col-md-offset-2" height="35px" width="35px" src="../../static/svg/onepage.svg"/>
			<span class="header col-md-2">HOMEPAGE</span>
			<div class="btn btn-goLogin col-md-offset-5" v-on:click="goTo('/login')">
				<div class="fade-enter-active">
					<img height="20px" width="35px" src="../../static/svg/personal-center.svg"/>
				</div>
			</div>
		</div>
		<div class="jumbotron" id="jumbotron">
			<h1>Features</h1>
			<p>NodeJS  &emsp;VueJS &emsp;Axios &emsp;Vue-Router &emsp;Vuex</p>
			<a class="btn btn-primary" href="/#features" role="button">Learn more</a>
		</div>
		<div class="features" id="features">
			<div class="feature-item">
				<h2>NODEJS  &nbsp;and  &nbsp;VUEJS</h2>
				<div class="row">
					  <div class="col-xs-6 col-md-5" id="NodeJS_Img">
					    <a class="thumbnail" href="https://nodejs.org/en/" target="_blank">
					      <img src="../assets/NodeJS.png" alt="">
					    </a>
					  </div>
					   <div class="col-xs-6 col-md-5">
					    <a class="thumbnail" href="https://cn.vuejs.org/" target="_blank">
					      <img src="../assets/logo.png" alt="">
					    </a>
					  </div>
				</div>
			</div>
			<div class="feature-item">
				<h2>AXIOS</h2>
				<div class="row">
					  <div class="col-xs-6 col-md-5">
					    <a class="thumbnail">
					      <img src="../assets/1.png" alt="">
					    </a>
					  </div>
					   <div class="col-xs-6 col-md-5">
					    <a class="thumbnail">
					      <img src="../assets/2.png" alt="">
					    </a>
					  </div>
				</div>
			</div>
			<div class="feature-item">
				<h2>VUE-ROUTER</h2>
				<div class="row">
					  <div class="col-xs-6 col-md-7">
					    <a class="thumbnail" href="https://router.vuejs.org/" target="_blank">
					      <img src="../assets/3.png">
					    </a>
					  </div>
				</div>
			</div>
			<div class="feature-item">
				<h2>VUEX</h2>
				<div class="row">
					  <div class="col-xs-6 col-md-7">
					    <a class="thumbnail" href="https://vuex.vuejs.org/"" target="_blank">
					      <img src="../assets/4.png">
					    </a>
					  </div>
				</div>
			</div>
		</div>

		<div class="ft" >
			<img width="32px" class="col-md-offset-2 git" onclick="window.open('https://github.com/Phenanth/Management-Platform');" src="../../static/svg/github5.svg"/>
		</div>
	</div>
</template>
<script>
import store from '../store'
import router from '../router'
export default {
	name: 'home',
	methods: {
		goTo: function (path) {
			router.push(path)
		}
	}/*,
	mounted: function () {
		store.dispatch('removeToken')
	}*/
}
</script>
<style>

html, body {
	min-width: 992px;
	margin: 0px;
	overflow-x: hidden;
 	background-color: white; 
}

img {
	position:relative;
	left:0%;
	
}

img:hover {
	cursor: pointer;
}
.header{
	position:relative;
	left:-18%;
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

.home {
	display: flex;
	flex-direction: column;
	width: 100%;
	color: #505050;
	height: 100%;
	margin-bottom: 20px;
}

.home > .hd {
	display: flex;
	background-color: white;
	margin-top: -23px;
	padding-bottom: 10px;
	padding-top: 20px;
	width: 100%;
	height: 80px;
	position: fixed;
	top: 3%;
	z-index:100;
	box-shadow:0px 0px  5px 3px #aaa;
}

.home > .hd > span {
	top: 5px;
	font-size: 22px;
}

.btn-goLogin {
	display: flex;
	position: fixed;
	top: 18px;
	right: 6%;
	width: 70px;
	align-items: center;
	justify-content: center;
	height: 35px;
	margin-top: 2px;
	margin-right: 2px;
	padding-left: 20px;
	padding-right: 20px;
	background-color: #0EA8A3;
}

.btn-goLogin:hover {
	color: white;
	cursor: pointer;
	background-color: #0c8a86;
}

.btn-goLogin:hover img {
	display: none;
}

.btn-goLogin:hover div:after {
	content: "Log in";
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

.jumbotron {
	margin-top: 20px;
	height:350px;
	background-color: rgba(	220,220,220 ,0.5);
    background-size: 10px 10px;
    background-image: linear-gradient(transparent 9px, #ffffff 9px,#ffffff 10px),linear-gradient(90deg, transparent 9px, #ffffff 9px,#ffffff 10px);
    z-index: 80;
}

.jumbotron > p {
	margin-top: 90px;
	margin-bottom: 20px;
}


.features {
	display: flex;
	flex-direction: column;
}

.feature-item h2 {
	font-weight:bold;

	margin-bottom:50px;
}

#NodeJS_Img img {
	height:200px;
}

.feature-item {
	margin-bottom: 20px;
}

.feature-item > div {
	display: flex;
	justify-content: center;
	align-items: center;
}

.home > .ft {
	position: fixed;
	float: right;
	left: 96%;
	bottom: 3%;
}

</style>