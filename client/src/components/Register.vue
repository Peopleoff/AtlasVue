<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="card">
        <div class="card-header card-header-icon" data-background-color="orange">
          <i class="material-icons">perm_identity</i>
        </div>
        <div class="card-content">
          <h4 class="card-title">Add New User</h4>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group label-floating">
                <label class="control-label">First Name</label>
                <input type="text" class="form-control" name="firstName" v-model="user.firstname">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group label-floating">
                <label class="control-label">Last Name</label>
                <input type="text" class="form-control" name="lastName" v-model="user.lastname">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group label-floating">
                <label class="control-label">User Name</label>
                <input type="text" class="form-control" name="userName" v-model="user.user_login">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group label-floating">
                <label class="control-label">Email</label>
                <input type="text" class="form-control" name="userEmail" v-model="user.email">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group label-floating">
                <label class="control-label">Mobile Phone</label>
                <input type="text" class="form-control" name="userMobile" v-model="user.mobile_phone">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group label-floating">
                <label class="control-label">Work Phone</label>
                <input type="text" class="form-control" name="userWork" v-model="user.work_phone">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group label-floating">
                <label class="control-label">User Group</label>
                <select name="server_type_id" class="form-control" v-model="user.group">
                  <option v-for="uGroup in userGroups" v-bind:value="uGroup.id">
                    {{uGroup.name}}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div v-html="error"></div>
          <br>
          <button class="btn btn-primary pull-right" @click="register">Register</button>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import UserService from '@/services/UserService'

  export default {
    name: 'Register',
    data() {
      return {
        user: {
          firstname: '',
          lastname: '',
          user_login: '',
          user_password: '',
          email: '',
          mobile_phone: '',
          work_phone: '',
          group: ''
        },
        userGroups: null,
        error: null
      }
    },
    async mounted() {
      this.userGroups = (await UserService.getUserGroups()).data;
    },
    methods: {
      generatePassword() {
        let length = 16,
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        console.log(retVal);
        return retVal;
      },

      async register() {
        this.error = null;
        try {
          await AuthenticationService.register({
            user_firstname: this.user.firstname,
            user_lastname: this.user.lastname,
            user_login: this.user.user_login,
            user_password: this.generatePassword(),
            user_email: this.user.email,
            user_work_phone: this.user.work_phone,
            user_mobile_phone: this.user.mobile_phone,
            user_group: this.user.group
          }).then(response => {
            this.user.firstname = null;
            this.user.lastname = null;
            this.user.user_login = null;
            this.user.user_password = null;
            this.user.email = null;
            this.user.work_phone = null;
            this.user.mobile_phone = null;
            this.user.group = null;
            $.notify({
              // options
              message: response.data.message
            }, {
              // settings
              type: 'success'
            });
          })
        } catch (error) {
          this.error = error.response.data.error.details
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
