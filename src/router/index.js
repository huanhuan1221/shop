import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Home from '@/components/pages/Home'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register,
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
    }
  ]
})
