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
          <option value="">All</option>
          <option v-for="types in serverTypes" v-bind:value="types.server_type_name">{{ types.server_type_name }}
          </option>
        </select>
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
              <tr v-for="server in servers">
                <td class="bold">
                  <strong>{{server.hostname}}</strong> <br>
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
        serverTypes: [],
        keyword: '',
        serverSelect: '',
        columns: [
          {
            label: 'Hostname',
            field: 'hostname'
          },
          {
            label: 'Description',
            field: 'description'
          },
          {
            label: 'Domain Name',
            field: 'domain_name'
          },
          {
            label: 'Local IP',
            field: 'local_ip',
          },
          {
            label: 'Public IP',
            field: 'public_ip'
          }
        ],
        rows: []
      }
    },
    async mounted() {
      this.servers = (await ServerService.getAllServers(this.$store.state.route.params.location_id)).data;
      this.serverTypes = (await ServerService.getAllServerTypes()).data;
      this.loading = false;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
