import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

import Index from '@/components/index'
import Login from '@/components/login'
import Userinfo from '@/components/userinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        let token = JSON.parse(store.getters.showTokenState)
        if (token) {
          next('/userinfo')
        } else {
          next()
        }
      }
    },
    {
    	path: '/userinfo',
    	name:'Userinfo',
    	component: Userinfo,
      beforeEnter: (to, from, next) => {
        let token = JSON.parse(store.getters.showTokenState)
        if (token) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})
