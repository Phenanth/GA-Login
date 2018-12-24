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
export default {
	name: 'User'
}
</script>

<style>

</style>