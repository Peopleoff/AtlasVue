<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <div class="col-md-8 col-md-offset-2">
      <div class="card">
        <div class="card-header card-header-icon" data-background-color="orange">
          <i class="material-icons">assignment</i>
        </div>
        <h4 class="card-title">Fort Myers</h4>
        <label for="serverSelect">Filter Server Type</label>
        <select id="serverSelect" v-model="serverSelect">
          <option value="0">All</option>
          <option v-for="types in serverTypes" v-bind:value="types.id">{{ types.server_type_name }}
          </option>
        </select>
        <div class="right">
          <div class="form-group form-search is-empty">
            <input type="text" class="form-control" placeholder="Search" v-model="keyword">
            <span class="material-input"></span>
          </div>
        </div>

        <div class="card-content">
          <div class="table-responsive">
            <table class="table">
              <thead class="text-primary">
              <tr>
                <th>Server</th>
                <th>Server Type</th>
                <th class="text-center">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="server in fileretedList">
                <td class="bold">
                  <strong>{{server.hostname}}</strong> <span v-if="server.production === 1">Production</span> <br>
                  <small>{{server.description}} - {{server.local_ip}}</small>
                </td>
                <td>{{server.server_type.server_type_name}}</td>
                <td class="td-actions text-center">
                  <div class="dropdown">
                    <button href="#" class="btn dropdown-toggle btn-simple" data-toggle="dropdown" aria-expanded="true">
                      <i class="material-icons">more_horiz</i>
                    </button>
                    <ul class="dropdown-menu">
                      <router-link tag="li" :to="{name: 'displayServer', params: {id: server.id}}">
                        <a href="#">View Server</a>
                      </router-link>
                      <li><a href="#">Another action</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end content-->
      </div>
      <!--  end card  -->
    </div>
    <!-- end col-md-12 -->
  </div>
  <!-- end row -->

</template>

<script>
  import ServerService from '@/services/ServerService'
  import Loader from '@/components/includes/Loader'

  export default {
    name: 'Network-Manager',
    components: {
      Loader
    },
    data() {
      return {
        loading: true,
        servers: [],
        filteredServers: null,
        serverTypes: [],
        keyword: '',
        serverSelect: "0",
      }
    },
    async mounted() {
      this.servers = (await ServerService.getAllServers(this.$store.state.route.params.location_id)).data;
      this.serverTypes = (await ServerService.getAllServerTypes()).data;
      this.filteredServers = this.servers;
      this.loading = false;
    },
    watch: {
      serverSelect: function() {
        this.filteredServers = this.servers.filter((server) => {
          if(this.serverSelect === "0"){
            return server
          } else {
            return server.server_type_id === this.serverSelect
          }
        });
      }
    },
    computed: {
      fileretedList() {
        return this.filteredServers.filter((server) => {
          return server.local_ip.toLowerCase().includes(this.keyword.toLowerCase())
            || server.hostname.toLowerCase().includes(this.keyword.toLowerCase())
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right{
    position: absolute;
    top: 0;
    right: 0;
    width: 33%;
  }

</style>
