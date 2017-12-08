<template>
  <div class="sidebar" data-active-color="rose" data-background-color="black" data-image="/static/assets/globe.gif" v-if="$store.state.user">
    <div class="logo">
      <a href="/" class="simple-text logo-normal text-center">
        Atlas
      </a>
    </div>
    <div class="sidebar-wrapper">
      <div class="user" v-if="$store.state.user">
        <div class="info text-center">
          <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                            <span>
                                {{$store.state.user.user_firstname}} {{$store.state.user.user_lastname}}
                                <b class="caret"></b>
                            </span>
          </a>
          <div class="clearfix"></div>
          <div class="collapse" id="collapseExample">
            <ul class="nav">
              <li>
                <router-link tag="a" :to="{name: 'profile', params: {id:$store.state.user.id}}">Profile</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name: 'Users'}">Users</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name: 'register'}">Register</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name: 'Settings'}">Settings</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name: 'ChangePassword'}">Change Password</router-link>
              </li>
              <li @click="logout">
                <a href="#">
                  <span class="sidebar-normal">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="nav">
        <router-link tag="li" :to="{name: 'dashboard'}">
          <a href="#">
            <i class="material-icons">dashboard</i>
            <p>Dashboard</p>
          </a>
        </router-link>
        <li>
          <a data-toggle="collapse" href="#serversSelect">
            <i class="material-icons">http</i>
            <p>Servers
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="serversSelect">
            <ul class="nav text-center">
              <router-link tag="li" :to="{name: 'NetworkManager', params: {location_id: 1}}">
                <a href="#">Fort Myers</a>
              </router-link>
              <router-link tag="li" :to="{name: 'NetworkManager', params: {location_id: 2}}">
                <a href="#">Maine</a>
              </router-link>
            </ul>
          </div>
        </li>
        <li>
          <a data-toggle="collapse" href="#racks">
            <i class="material-icons">reorder</i>
            <p>Server Racks
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="racks">
            <ul class="nav text-center">
              <router-link tag="li" :to="{name: 'ServerRacks', params: {location_id: 1}}">
                <a href="#">Fort Myers</a>
              </router-link>
              <router-link tag="li" :to="{name: 'ServerRacks', params: {location_id: 2}}">
                <a href="#">Maine</a>
              </router-link>
            </ul>
          </div>
        </li>
        <router-link tag="li" :to="{name: 'Documentation'}">
          <a href="#">
            <i class="material-icons">code</i>
            <p>Documentation</p>
          </a>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidenav',
    data () {
      return {
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', null);
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
