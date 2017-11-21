<template>
  <div class="row">
    <div class="col-md-7">
      <div class="card">
        <div class="card-header card-header-icon" data-background-color="orange">
          <i class="material-icons">perm_identity</i>
        </div>
        <div class="card-content">
          <h4 class="card-title">{{ user.user_login }} -
            <small class="category">Complete your profile</small>
          </h4>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Fist Name</label>
                  <input type="text" class="form-control" name="first_name">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Last Name</label>
                  <input type="text" class="form-control" name="first_name">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">User Group</label>
                  <input type="text" class="form-control"  name="user_group">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Email</label>
                  <input type="text" class="form-control" name="user_email">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Work Phone</label>
                  <input type="text" class="form-control" name="work_phone">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Mobile Phone</label>
                  <input type="text" class="form-control"  name="mobile_phone">
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
            <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="card">
        <div class="card-content">
          <h4 class="card-title">Server Access</h4>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Fist Name</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group label-floating">
                  <label class="control-label">Last Name</label>
                  <input type="text" class="form-control">
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-simple pull-right">Update Profile</button>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import UserService from '@/services/UserService'
  export default {
    name: 'Profile',
    data () {
      return {
        user: {},
        userGroups: {},
        servers: {}
      }
    },
    async mounted () {
      this.user = (await UserService.getProfile()).data
    },
    methods: {

    },
    computed: {

    },
    filters: {
      formatNumber(s) {
        let s2 = (""+s).replace(/\D/g, '');
        let m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
