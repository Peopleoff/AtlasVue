<template>
  <div class="sidebar" data-active-color="rose" data-background-color="black" data-image="/static/assets/globe.gif">
    <div class="logo">
      <a href="/" class="simple-text logo-normal text-center">
        Atlas
      </a>
    </div>
    <div class="sidebar-wrapper">
      <div class="user">
        <div class="info text-center">
          <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                            <span>
                                First name + Last name
                                <b class="caret"></b>
                            </span>
          </a>
          <div class="clearfix"></div>
          <div class="collapse" id="collapseExample">
            <ul class="nav">
              <li>
                <router-link to="profile">Profile</router-link>
              </li>
              <li>
                <a href="/users">
                  <span class="sidebar-normal">Users</span>
                </a>
              </li>
              <li>
                <router-link to="register">Register</router-link>
              </li>
              <li>
                <a href="/settings">
                  <span class="sidebar-normal">Settings</span>
                </a>
              </li>
              <li>
                <a href="/users/changePassword">
                  <span class="sidebar-normal">Change Password</span>
                </a>
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
        <li @click="navigate({
              name: 'dashboard'
              })">
          <a href="#">
            <i class="material-icons">dashboard</i>
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a data-toggle="collapse" href="#serversSelect">
            <i class="material-icons">http</i>
            <p>Servers
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="serversSelect">
            <ul class="nav text-center">
              <li @click="navigate({
              name: 'NetworkManager',
              params: {
                location_id: '1'
              }
              })">
                <a href="#">Fort Myers</a>
              </li>
              <li @click="navigate({
              name: 'NetworkManager',
              params: {
                location_id: '2'
              }
              })">
                <a href="#">Maine</a>
              </li>
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
              <li @click="navigate({
              name: 'ServerRacks',
              params: {
                location_id: 1
              }
              })">
                <a href="#">Fort Myers</a>
              </li>
              <li @click="navigate({
              name: 'ServerRacks',
              params: {
                location_id: 2
              }
              })">
                <a href="#">Maine</a>
              </li>
            </ul>
          </div>
        </li>
        <li @click="navigate({
              name: 'Documentation'
              })">
          <a href="#">
            <i class="material-icons">code</i>
            <p>Documentation</p>
          </a>
        </li>

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
      navigate (route) {
        this.$router.push(route)
      },
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
