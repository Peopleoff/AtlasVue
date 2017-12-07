import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import DisplayServer from '@/components/DisplayServer'
import Profile from '@/components/Profile'
import NetworkManager from '@/components/NetworkManager'
import Documentation from '@/components/Documentation'
import ServerRacks from '@/components/ServerRacks'
import Users from '@/components/Users'
import Settings from '@/components/Settings'
import ChangePassword from '@/components/ChangePassword'

import store from '@/store/store'

Vue.use(Router);

const router = new Router({
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
      path: '/serverracks/:location_id',
      name: 'ServerRacks',
      component: ServerRacks
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
});

router.beforeEach((to, from, next) => {

  if (!store.state.user && to.path !== '/') {
    console.log(to.path);
    console.log('user not logged in');
    next('/')
  } else {
    next()
  }

  if (store.state.user && to.path === '/') {
    console.log('user logged in');
    next('/dashboard')
  } else {
    next()
  }

});
export default router;
