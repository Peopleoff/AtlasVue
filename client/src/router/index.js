import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import DisplayServer from '@/components/DisplayServer'
import Profile from '@/components/Profile'
import NetworkManager from '@/components/NetworkManager'
import Documentation from '@/components/Documentation'
import Users from '@/components/Users'

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
      path: '/DisplayServer/:id',
      name: 'displayServer',
      component: DisplayServer
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/networkmanager/:location_id',
      name: 'NetworkManager',
      component: NetworkManager
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
