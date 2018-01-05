<template>
  <div class="col-md-4 col-sm-6 col-md-offset-2 col-sm-offset-3">
    <div class="card card-login">
      <div class="card-header text-center" data-background-color="orange">
        <h4 class="card-title">Login</h4>
      </div>
      <div class="card-content">
        <div class="input-group">
            <span class="input-group-addon">
                <i class="material-icons">email</i>
            </span>
          <div class="form-group label-floating">
            <label class="control-label">Login</label>
            <input type="text" name="userName" class="form-control" v-model="user_login">
          </div>
        </div>
        <div class="input-group">
                <span class="input-group-addon">
                    <i class="material-icons">lock_outline</i>
                </span>
          <div class="form-group label-floating">
            <label class="control-label">Password</label>
            <input type="password" name="userPassword" class="form-control" v-model="user_password">
          </div>
        </div>
      </div>
      <div class="footer text-center">
        <button type="submit" class="btn btn-simple btn-wd btn-lg" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    name: 'Login',
    data() {
      return {
        user_login: '',
        user_password: '',
        error: null
      }
    },
    methods: {
      async login() {
        try {
          const response = await AuthenticationService.login({
            user_login: this.user_login,
            user_password: this.user_password
          });
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user);
          this.$router.push('dashboard')
        } catch (error) {
          this.error = error.response.data
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .card .card-content{
    padding: 15px 30px 0 10px;
  }

</style>
