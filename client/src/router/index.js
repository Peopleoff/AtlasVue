import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import DisplayServer from '@/components/DisplayServer'
import Profile from '@/components/Profile'
import NetworkManager from '@/components/NetworkManager'
import Documentation from '@/components/Documentation'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/DisplayServer',
      name: 'displayServer',
      component: DisplayServer
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/networkmanager',
      name: 'NetworkManager',
      component: NetworkManager
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    }
  ]
})
