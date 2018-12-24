<!DOCTYPE html>
<template>
<div class="userinfo">

  <div class="main">
    <!-- <div class="label"><h4>XXXXXX</h4><div class="arrow-left"></div></div> -->
    <div class="info">
      <img src="../assets/pic.jpeg" alt="个人照片">
      <div>username: {{ userdata.user_id }}</div>
      <div>sex: {{ userdata.user_sex }}</div>
      <div>secret: {{ userdata.user_secret }}</div>
    </div>

    <div class="verify">
      
      <button class="btn btn-default" v-on:click="goTo('/user/verify-first')">进行二次认证</button>

    </div>
  </div>

</div>
</template>
<script>
import api from '../api.js'
import store from '../store/index.js'
export default{
	name: 'Userinfo',
  data: function () {
    return {
      userdata: {
        user_id: '',
        user_sex: '',
        user_secret: ''
      }
    }
  },
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		},
    doLogout: function () {
      store.dispatch('logout')
      this.$router.push('/')
      this.$router.go(0)
    }
	},
  computed: {
    isVerified: function () {
      if (this.user_secret) {

      }
    }
  },
  mounted: function () {
    let opt = {
      username: JSON.parse(store.getters.showTokenState).username
    }
    api.getData(opt).then(({
      data
    }) => {
      if (data.info == 200) {
        console.log(data)
        this.userdata.user_id = data.user_id
        this.userdata.user_sex = data.user_sex
        this.userdata.user_secret = data.user_secret
      } else {
        alert(data.message)
        logout()
      }
    })
  }
}
</script>
<style>

.userinfo {
  width: 100%;
  height: 100%;
  background-color: white; 
}

.top {
  background-color: black;
  height: 55px;
  position: fixed;
  top:0px;
  left: 0px;
  width: 100%;
}

.top h3 {
  float: left;
  margin-top: 10px;
  margin-left: 30px;
  color: #0EA8A3;
  font-size: 25px;
}

.top img {
  margin-right: 60px;
  position: absolute;
  left: 91%;
  top: 30%;
  height: 25px;
  width: 25px;
  border: 0px;
}

.top input {
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
.top input:hover {
  color: white;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  height: 100%;
  width: 100%;
  background-color: white;
}
/* .label{
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
} */


.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.info > img {
  margin-top: 0px;
  border: 1px solid gray;
  height: 200px;
  width: 180px;
}
.info ul{
  list-style: none;
  float: right;
  font-size: 30px;
  font-weight: 400;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.info ul li{
  text-align: right;
}

</style>