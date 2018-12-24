<!DOCTYPE html>
<template>
	
	<div>
		<div>{{ qrImage }}</div>
	</div>
</template>
<script>
import api from '../../api.js'
import store from '../../store'
export default {
	name: 'Verify-First',
	data: function () {
		return {
			qrImage: null
		}
	},
	methods: {
		goTo: function ( path ) {
			this.$router.push(path)
		}
	},
	mounted: function () {
		api.sendVerify().then(({
			data
		}) => {
			this.qrImage = data.image
		})
	}
}
</script>
<style></style>