<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
  </div>

</template>

<script>
  import Loader from '@/components/includes/Loader'
  export default {
    name: 'ChangePassword',
    components: {
      Loader
    },
    data () {
      return {
        loading: true
      }
    },
    async mounted () {
      this.loading = false;
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
