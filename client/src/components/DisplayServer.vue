<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <div class="col-lg-8 col-lg-offset-2">
      <div class="card" id="serverInformation">
        <div class="card-header card-header-icon" data-background-color="orange">
          <i class="material-icons">http</i>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ servers.hostname }}
          </h3>
          <form method="POST" action="/serverDisplay/updateServer">
            <!--Start of Network Spec card-->
            <div class="card serverInfoCard">
              <div class="card-content">
                <h3 class="card-title">Network Information</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group label-floating">
                      <label class="control-label">Server Host Name</label>
                      <input type="text" class="form-control" v-bind:value="servers.hostname"
                             name="hostname">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group label-floating">
                      <label class="control-label">Server Description</label>
                      <input type="text" class="form-control" v-bind:value="servers.description"
                             name="description">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group label-floating">
                      <label class="control-label">Internal IP</label>
                      <input type="text" class="form-control" v-bind:value="servers.local_ip"
                             name="local_ip">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group label-floating">
                      <label class="control-label">Public IP</label>
                      <input type="text" class="form-control" v-bind:value="servers.public_ip"
                             name="public_ip">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group label-floating">
                      <label class="control-label">Domain Name</label>
                      <input type="text" class="form-control" v-bind:value="servers.domain_name"
                             name="domain_name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group label-floating">
                      <select name="server_type_id" class="form-control" v-model="serverType">
                        <option v-for="serverTypes in serverTypes"
                                v-bind:value="serverTypes.id"
                                v-bind:selected="servers.server_type_id">
                          {{ serverTypes.server_type_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End of Network Spec card-->
            <!--Start of Services Spec card-->
            <div class="card serverInfoCard">
              <div class="row">
                <div class="card-content">
                  <h3 class="card-title">Services</h3>
                  <a class="addBtn" data-value="" data-toggle="modal" data-target="#addService"
                     v-on:click="addService('add')" v-if="$store.state.isAuth">
                    <i class="material-icons">add_circle</i>
                    <div class="ripple-container"></div>
                  </a>
                  <div class="table-response">
                    <table class="table">
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th>Port</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th class="text-right" v-if="$store.state.isAuth">Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="service in servers.services">
                        <td id="serviceName">{{ service.service_name }}</td>
                        <td id="servicePort">{{ service.server_services.service_port }}</td>
                        <td id="serviceLogin">{{ service.server_services.service_login }}</td>
                        <td id="servicePassword" class="longText">{{ service.server_services.service_password }}
                        </td>
                        <td class="td-actions text-right" v-if="$store.state.isAuth">
                          <a  type="button"
                             rel="tooltip" class="btn btn-info">
                            <i class="material-icons">visibility</i>
                          </a>
                          <a data-toggle="modal" data-target="#addService"
                             type="button"
                             rel="tooltip" class="btn btn-info">
                            <i class="material-icons">edit</i>
                          </a>
                          <a type="button"
                             rel="tooltip"
                             class="btn btn-danger">
                            <i class="material-icons">delete</i>
                          </a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" name="server_id" v-bind:value="servers.server_id">
            <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import ServerService from '@/services/ServerService'
  import Loader from '@/components/includes/Loader'
  import AuthenticationService from "@/services/AuthenticationService";

  export default {
    name: 'displayServer',
    components: {
      Loader
    },
    data() {
      return {
        loading: true,
        servers: null,
        services: null,
        serverTypes: null,
        serverType: null
      }
    },
    async mounted() {
      this.servers = (await ServerService.showServer(this.$store.state.route.params.id)).data;
      this.serverTypes = (await ServerService.getAllServerTypes()).data;
      this.loading = false;
      try {
        const response = await AuthenticationService.isAuth({
          user_id: this.$store.state.user.id,
          user_group: this.$store.state.user.user_group,
          server_id: this.$store.state.route.params.id
        });
        this.$store.dispatch('setIsAuth', response.data);
      } catch (error) {
        this.error = error.response.data
      }
      this.serverType = this.servers.server_type_id
    },
    beforeDestroy() {
      this.$store.dispatch('setIsAuth', null);
    },
    filters: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  div{
    font-size: 20px;
    line-height: 1.5em;
  }
  .server-tag{
    text-align: left;
    font-weight: bolder;
  }
  .server-info{
    text-align: left;
  }

  .table>thead>tr>th{
    font-size: 1em;
  }

</style>
