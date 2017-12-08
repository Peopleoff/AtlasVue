<template>
  <div class="wrapper" id="app">
    <!--SideNav-->
   <Sidenav></Sidenav>
    <div class="main-panel">
      <Topnav />
      <div class="content">
        <div class="container">
          <router-view/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import Topnav from '@/components/includes/Topnav.vue'
  import Sidenav from '@/components/includes/Sidenav.vue'
  import Bottomnav from '@/components/includes/Bottomnav.vue'

  export default {
    name: 'app',
    components: {
      Topnav,
      Sidenav,
      Bottomnav
    }
  }
</script>

<style>
  @import '../static/css/bootstrap.min.css';
  @import '../static/css/material-dashboard.css';
  @import '../static/css/styles.css';
  @import '../static/fonts/icons.css';
</style>
