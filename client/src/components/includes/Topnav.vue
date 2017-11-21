<template>
  <nav class="navbar navbar-transparent navbar-absolute">
    <div class="container-fluid">
      <div class="navbar-minimize">
        <button id="minimizeSidebar" class="btn btn-round btn-white btn-fill btn-just-icon">
          <i class="material-icons visible-on-sidebar-regular">more_vert</i>
          <i class="material-icons visible-on-sidebar-mini">view_list</i>
        </button>
      </div>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group form-search is-empty">
            <input type="text" class="form-control" placeholder="Search" v-model="keyword">
            <span class="material-input"></span>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="separator hidden-lg hidden-md"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Topnav',
    data () {
      return {
        keyword: ''

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
