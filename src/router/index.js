import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Login from '@/components/autentication/Login'
import Register from '@/components/autentication/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'login',
      component: Register
    }
  ]
})
