<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">{{ location.name }}
          </h4>
        </div>
        <div class="card-content">
          <div class="row">
            <div class="col-md-3 sidePill">
              <ul class="nav nav-pills nav-pills-rose nav-stacked">
                <li v-for="racks in racks" v-on:click="placeRacks(racks)">
                  <a :href="'#rack'+racks.id" data-toggle="tab" aria-expanded="true">{{racks.rack_name}}</a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div class="tab-content">
                <div class="tab-pane" v-for="racks in racks" :id="'rack'+racks.id">
                  <div class="list-group" v-bind:id="'serverRack' + racks.id" v-bind:data-rack="racks.id">
                  <a type="button" class="list-group-item list-group-item-action" v-for="racks in racks.rack_height"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Loader from '@/components/includes/Loader'
  import ServerService from '@/services/ServerService'
  import LocationService from '@/services/LocationService'

  export default {
    name: 'ServerRacks',
    components: {
      Loader
    },
    data () {
      return {
        loading: true,
        racks: null,
        servers: null,
        location: null
      }
    },
    async mounted () {
      this.racks = (await ServerService.getAllRacks(this.$store.state.route.params.location_id)).data;
      this.servers = (await ServerService.getAllServers(this.$store.state.route.params.location_id)).data;
      this.location = (await LocationService.getAllLocations(this.$store.state.route.params.location_id)).data[0];
      this.loading = false;
    },
    methods: {
      placeRacks: function (racks) {
          let rackID = racks.id;
          let rack = $('#serverRack' + rackID + ' a');
          let server = this.servers;

          rack.each(function (idx, a) {
            let rackIndex = idx + 1;
            $(a).attr('data-height', (rackIndex));
            $(a).html(rackIndex);
          });

        for (let i = 0; i < server.length; i++) {
          if (server[i].rack_id && server[i].rack_id === racks.id) {
            let serverHostname = server[i].hostname;
            let rackID = server[i].rack_id;
            let serverHeight = server[i].server_height;
            let serverLocation = server[i].server_rack_location;
            let rackButtonHTML = $('#serverRack' + rackID).find('[data-height=' + serverLocation + ']').html();
            let rackButton = $('#serverRack' + rackID).find('[data-height=' + serverLocation + ']')[0];
            rackButton.innerText = serverHostname;
            rackButton.href = "/#/DisplayServer/" + server[i].id;
//            rackButton.style.height = (liHeight * serverHeight) + "px";
          }
        }

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    cursor: pointer;
  }

  .sidePill{
    border-right: 1px solid;
    height: 75vh;
  }

  /* Custom, iPhone Retina */
  @media only screen and (max-width : 990px) {
    .sidePill{
      border-bottom: 1px solid;
      border-right: none;
      height: 100%;
    }

  }
</style>

<!--<div class="list-group" v-bind:id="'serverRack' + racks.id" v-bind:data-rack="racks.id">-->
  <!--<a type="button" class="list-group-item list-group-item-action" v-for="racks in racks.rack_height"></a>-->
<!--</div>-->
