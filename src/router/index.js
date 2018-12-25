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
      path: '/verify-login',
      name: 'Verify-Login',
      component: VerifyLogin,
      beforeEnter: (to, from, next) => {
        let token = JSON.parse(store.getters.showTokenState)
        let needAuth = JSON.parse(store.getters.showAuthState)
        if (needAuth) {
          next()
        } else {
          if (token) {
            next('/user/userinfo')
          } else {
            next('/login')
          }
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
          component: VerifyFirst,
          beforeEnter: (to, from, next) => {
            let verify = JSON.parse(store.getters.showTokenState).verify
            if (verify) {
              next('/user/userinfo')
            } else {
              next()
            }
          }
        },
        {
          path: 'userinfo',
          name:'Userinfo',
          component: Userinfo,
          beforeEnter: (to, from, next) => {
            let token = JSON.parse(store.getters.showTokenState)
            let needAuth = JSON.parse(store.getters.showAuthState)
            if (token && !needAuth) {
              next()
            } else {
              if (needAuth) {
                next('/verify-login')
              } else {
                next('/login')
              }
            }
          }
        }
      ]
    }
  ]
})
