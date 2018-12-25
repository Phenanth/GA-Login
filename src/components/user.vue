<!DOCTYPE html>
<template>
<div class="user">
	<div class="top">
    <h3>User</h3>
    <img src="../assets/logout.png">
    <input type="button" value="Exit" v-on:click="doLogout()">
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import store from '../store'
export default {
	name: 'User',
	methods: {
	    doLogout: function () {
	      store.dispatch('removeToken')
	      this.$router.push('/')
	      this.$router.go(0)
	    }
	}
}
</script>

<style>

</style>