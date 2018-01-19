<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <div class="col-md-8 col-md-offset-2">
      <div class="card">
        <div class="card-header card-header-icon" data-background-color="orange">
          <i class="material-icons">perm_identity</i>
        </div>
        <div class="card-content">
          <h4 class="card-title">Add New User</h4>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group label-floating">
                <label class="control-label">New Password</label>
                <input type="text" class="form-control" name="firstName" v-model="newPassword">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group label-floating">
                <label class="control-label">Confirm Password</label>
                <input type="text" class="form-control" name="firstName" v-model="newPassword2">
              </div>
            </div>
          <div v-html="error"></div>
          <br>
          <button class="btn btn-primary pull-right" @click="changePassword">Change Password</button>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
  import Loader from '@/components/includes/Loader'
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    name: 'ChangePassword',
    components: {
      Loader
    },
    data () {
      return {
        loading: true,
        newPassword: null,
        newPassword2: null,
        error: null,
      }
    },
    async mounted () {
      this.loading = false;
    },
    methods: {
      async changePassword() {
        this.error = null;
        try {
          await AuthenticationService.changePassword({
            id: this.$store.state.user.id,
            newPassword: this.newPassword,
            newPassword2: this.newPassword2
          }).then(response => {
            this.newPassword = null;
            this.newPassword2 = null;
            $.notify({
              // options
              message: response.data.message
            },{
              // settings
              type: 'success'
            });
          })
        } catch (error) {
          $.notify({
            // options
            message: "Password must be greater than 5 characters"
          },{
            // settings
            type: 'danger'
          });
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
