import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

import Index from '@/components/index'
import Login from '@/components/login'

import User from '@/components/user'
import Userinfo from '@/components/userinfo'

import VerifyFirst from '@/components/authenticate/verify_first'
import VerifyLogin from '@/components/authenticate/verify_login'

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
          next('/user/userinfo')
        } else {
          next()
        }
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'verify-first',
          name: 'Verify-First',
          component: VerifyFirst
        },
        {
          path: 'userinfo',
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
    }
  ]
})
