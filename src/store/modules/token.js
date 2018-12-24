/* Vuex for token management. */
import api from '../../api.js'

const state = {
	token: null,
	isVerified: null
}

const getters = {
	showTokenState: function (state) {
		return localStorage.getItem('token')
	},
	showVerifyState: function (state) {
		return localStorage.getItem('verify')
	}
}

const actions = {
	storeToken: function ({ commit }, data) {
		commit('STORETOKEN', data)
	},
	logout: function ({ commit }) {
		commit('LOGOUT')
	},
	storeVerify: function ({ commit }, data) {
		commit('STOREVERIFY', data)
	},
	removeVerify: function ({ commit }, data) {
		commit('REMOVEVERIFY', data)
	}
}

const mutations = {
	STORETOKEN: function (state, data) {
		localStorage.setItem('token', data)
		state.token = data
	},
	LOGOUT: function (state) {
		localStorage.removeItem('token')
		state.token = null
	},
	STOREVERIFY: function (state, data) {
		localStorage.setItem('verify', data)
	},
	REMOVEVERIFY: function (state) {
		localStorage.removeItem('verify')
		state.isVerified = null
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
