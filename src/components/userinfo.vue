<!DOCTYPE html>
<template>
<div>
	<div class="top">
		<h3>Information</h3>
		<img src="../assets/logout.png">
		<input type="button" value="Exit" v-on:click="doLogout()">
	</div>
	<div class="main">
		<div class="label"><h4>XXXXXX</h4><div class="arrow-left"></div></div>
		<div class="info">
			<section class="userInfo">
				<img src="../assets/pic.jpeg" alt="个人照片">
				<ul>
					<li>username:&nbsp;</li>
					<li>sex:&nbsp;</li>
					<li>XXX:&nbsp;</li>
					<li>XXX:&nbsp;</li>
					<li>XXX:&nbsp;</li>
					<li>XXX:&nbsp;</li>
				</ul>
			</section>
		</div>
	</div>
</div>
</template>
<script>
import store from '../store/index.js'
export default{
	name: 'Userinfo',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		},
    doLogout: function () {
      store.dispatch('logout')
      this.$router.push('/')
      this.$router.go(0)
    }
	}
}
</script>
<style>
body{
  width: 100%;
  height: 100%;
  background-color: white; 
}
.top{
  background-color: black;
  height: 55px;
  position: fixed;
  top:0px;
  left: 0px;
  width: 100%;
}
.top h3{
  float: left;
  margin-top: 10px;
  margin-left: 30px;
  color: #0EA8A3;
  font-size: 25px;
}
.top img{
  margin-right: 60px;
  position: absolute;
  left: 91%;
  top: 30%;
  height: 25px;
  width: 25px;
  border: 0px;
}
.top input{
  float: right;
  color: #0EA8A3;
  width: 50px;
  background-color: black;
  border: 0px;
  height: 55px;
  width: 55px;
  font-size: 25px;
  font-weight:550;
  margin-right: 30px;
  cursor:pointer;
}
.top input:hover{
  color: white;
}
.main{
  top: 0px;
  margin-top: 55px;
  position: fixed;
  left: 5%;
  height: 100%;
  width: 90%;
  background-color: white;
}
.label{
  position: absolute;
  top: 15px;
  font-size: 20px;
  width: 160px;
  height: 50px;
  float: left;
  background-color: #0EA8A3;
  color: white;
}
.label h4{
  font-weight: 450;
  margin-top: 10px;
  margin-left: 30px;
}
.arrow-left {
  position: absolute;
  left: 135px;
  top: 0px;
  font-size: 0;
  line-height: 0;
  border-width: 25px;
  border-color: white;
  border-left-width: 0;
  border-style: dashed;
  border-right-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
.userInfo{
  float: right;
  position: absolute;
  top: 15%;
  left: 30%;
  text-align: left;
  font-size: 20px;
  line-height: 45px;
}
section > img{
  margin-top: 0px;
  border: 1px solid gray;
  height: 200px;
  width: 180px;
}
.userInfo ul{
  list-style: none;
  float: right;
  font-size: 30px;
  font-weight: 400;
  line-height: 50px;
  margin-left: 30px;
}
.userInfo ul li{
  text-align: right;
}

</style>