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
          <!--Start of Hard Spec card-->
          <div class="card serverInfoCard" v-if="servers.server_hardware">
            <div class="row">
              <div class="card-content">
                <h3 class="card-title">Hardware Specifications</h3>
                <div class="hardware">
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Processor 1</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.processor_1">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Processor 2</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.processor_2">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Memory</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.memory">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Storage 1</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.storage_1">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Storage 2</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.storage_2">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Storage 3</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.storage_3">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Storage 4</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.storage_4">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Network 1</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.network_1">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Network 2</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.network_2">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group label-floating">
                      <label class="control-label">Operating System</label>
                      <input type="text" class="form-control" v-bind:value="servers.server_hardware.operating_system">
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="row">
              <div class="card-content">
                <div class="col-md-4">
                  <div class="form-group label-floating">
                    <label class="control-label">Serial Number</label>
                    <input type="text" class="form-control" v-bind:value="servers.serial_number"
                           name="serial_number">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group label-floating">
                    <select name="rack_id" class="form-control" v-model="rackSelect">
                      <option value="">No Rack</option>
                      <option v-for="rack in rack" v-bind:value="rack.rack_id"
                              v-bind:selected="servers.rack_id">{{ rack.rack_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group label-floating">
                    <label class="control-label">Rack Location</label>
                    <input type="text" class="form-control"
                           v-bind:value=" servers.server_rack_location "
                           name="server_rack_location">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End of Hard Spec card-->
            <!--Start of Services Spec card-->
            <div class="card serverInfoCard" v-if="servers.services.length > 0">
              <div class="row">
                <div class="card-content">
                  <h3 class="card-title">Services</h3>
                  <a class="addBtn" data-value="" data-toggle="modal" data-target="#addService"
                     v-on:click="updateService()" v-if="$store.state.isAuth">
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
                        <th class="text-center" v-if="$store.state.isAuth">Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="service in servers.services">
                        <td id="serviceName">{{ service.service_name }}</td>
                        <td id="servicePort">{{ service.server_services.service_port }}</td>
                        <td id="serviceLogin">{{ service.server_services.service_login }}</td>
                        <td id="servicePassword" class="longText">{{ service.server_services.service_password }}
                        </td>
                        <td class="td-actions text-center" v-if="$store.state.isAuth">
                          <div class="dropdown">
                            <button href="#" class="btn dropdown-toggle btn-simple" data-toggle="dropdown"
                                    aria-expanded="true">
                              <i class="material-icons">more_horiz</i>
                            </button>
                            <ul class="dropdown-menu">
                              <li><a v-on:click="decryptPassword(service)">View Password</a></li>
                              <li><a v-on:click="updateService(service)">Update Service</a></li>
                              <li><a v-on:click="deleteService(service)">Delete Service</a></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!--End of Services Spec card-->
            <!--Start of VM Spec card-->
            <!--End of VM Spec card-->
            <button type="submit" class="btn btn-primary pull-right" v-if="$store.state.isAuth" v-on:click="updateServer('asd')">Update Server</button>
            <div class="clearfix"></div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="service" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="material-icons">clear</i>
            </button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <div class="col-md-3">
              <div class="form-group label-floating is-empty">
                <select name="service_id_fk" class="form-control" v-model="newService.service_id">
                  <option v-for="service in services" v-bind:value="service.id">
                    {{ service.service_name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group label-floating col-md-3 is-focused">
              <label class="control-label">Port</label>
              <input type="text" class="form-control" number="true" name="service_port"
                     v-model="newService.service_port">
            </div>
            <div class="form-group label-floating col-md-3 is-focused">
              <label class="control-label">Login</label>
              <input type="text" class="form-control" name="service_login" v-model="newService.service_login">
            </div>
            <div class="form-group label-floating col-md-3 is-focused">
              <label class="control-label">Password</label>
              <input type="text" class="form-control" name="service_password" v-model="newService.service_password">
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%" id="serviceBtn" v-on:click="addService()">
              Add Service
              <div class="ripple-container"></div>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import ServerService from '@/services/ServerService'
  import ServicesService from '@/services/ServicesService'
  import Loader from '@/components/includes/Loader'
  import AuthenticationService from "@/services/AuthenticationService";

  export default {
    name: 'displayServer',
    components: {
      Loader
    },
    data() {
      return {
        errors: null,
        loading: true,
        servers: null,
        services: null,
        serverTypes: null,
        serverType: null,
        password: null,
        newService: {
          service_id: null,
          service_port: null,
          service_login: null,
          service_password: null,
        }
      }
    },
    methods: {

      async updateServer(server) {
        console.log(server);
        try {
          await ServicesService.updateServer(server);
          location.reload();
        } catch (error) {
          this.error = error.response.data.error.details
        }
      },

      updateService: function (service) {
        let serviceModal = $('#service');
        if (service) {
            this.newService.service_id = service.id,
            this.newService.service_port = service.server_services.service_port,
            this.newService.service_login = service.server_services.service_login,
            this.newService.service_password = service.server_services.service_password,
            serviceModal.modal('toggle');
        } else {
            this.newService.service_id = null,
            this.newService.service_port = null,
            this.newService.service_login = null,
            this.newService.service_password = null,
            serviceModal.modal('toggle');
        }

      },
      async addService() {
        try {
          await ServicesService.updateService({
            server_id: this.$store.state.route.params.id,
            service_id: this.newService.service_id,
            service_port: this.newService.service_port,
            service_login: this.newService.service_login,
            service_password: this.newService.service_password
          });
          location.reload();
        } catch (error) {
          this.error = error.response.data.error.details
        }
      },

      async deleteService(service) {
        try {
          await ServicesService.deleteService({
            server_id: this.$store.state.route.params.id,
            service_id: service.id,
          });
          location.reload();
        } catch (error) {
          this.error = error.response.data.error.details
        }
      },

      async decryptPassword(service) {
        try {
          let decryptedPassword = (await AuthenticationService.decryptPassword({password: service.server_services.service_password})).data;
          $.notify({
            // options
            message: 'Service - ' + service.service_name + ' Password - ' + decryptedPassword
          },{
            // settings
            type: 'info',
          });
        } catch (error) {
          this.error = error.response.data.error.details
        }
      }
    },
    async mounted() {
      this.servers = (await ServerService.showServer(this.$store.state.route.params.id)).data;
      this.serverTypes = (await ServerService.getAllServerTypes()).data;
      this.services = (await ServicesService.getAllServices()).data;
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
    filters: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  div {
    font-size: 20px;
    line-height: 1.5em;
  }

  .server-tag {
    text-align: left;
    font-weight: bolder;
  }

  .server-info {
    text-align: left;
  }

  .table > thead > tr > th {
    font-size: 1em;
  }

</style>
