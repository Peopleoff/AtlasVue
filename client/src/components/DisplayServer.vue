<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
  </div>

</template>

<script>
  import ServerService from '@/services/ServerService'
  import Loader from '@/components/includes/Loader'
  export default {
    name: 'displayServer',
    components: {
      Loader
    },
    data () {
      return {
        loading: true,
        servers: null,
      }
    },
    async mounted(){
      let id = this.$store.state.route.params.id;
      this.servers = (await ServerService.showServer({
        id: id
      })).data;
      this.loading = false;
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
