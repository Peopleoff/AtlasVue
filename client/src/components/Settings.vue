<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <h1>Hello</h1>
  </div>

</template>

<script>
  import Loader from '@/components/includes/Loader'
  export default {
    name: 'Settings',
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
