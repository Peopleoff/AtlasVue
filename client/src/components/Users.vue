<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-icon" data-background-color="rose">
          <i class="material-icons">people</i>
        </div>
        <h4 class="card-title">Users</h4>
        <router-link tag="a" class="addBtn" :to="{name: 'register'}">
          <i class="material-icons">add_circle</i>
          <div class="ripple-container"></div>
        </router-link>
        <div class="card-content">
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Work Phone</th>
                <th>Mobile Phone</th>
                <th>User Group</th>
                <th class="text-right">Active</th>
                <th class="text-right">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="users in users">
                <td>{{ users.user_firstname }} &nbsp; {{ users.user_lastname }}</td>
                <td>{{ users.user_email }}</td>
                <td>{{ users.user_work_phone | formatNumber }}</td>
                <td>{{ users.user_mobile_phone | formatNumber }}</td>
                <td>{{ users.name }}</td>
                <td class="text-right" v-if="users.user_status === 1">
                  <i class="material-icons" style="color: green">done</i>
                </td>
                <td class="text-right" v-else>
                  <i class="material-icons" style="color: red">clear</i>
                </td>
                <td class="td-actions text-right">
                  <router-link tag="a" type="button" rel="tooltip" class="btn btn-info" :to="{
                      name: 'profile',
                      params: {
                        id: users.id
                      }
                      }">
                    <i class="material-icons">person</i>
                  </router-link>
                  <a v-on:click="showSwal(users.user_id)" type="button"
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
  </div>
</template>

<script>
  import Loader from '@/components/includes/Loader'
  import UserService from '@/services/UserService'
  export default {
    name: 'Users',
    components: {
      Loader
    },
    data () {
      return {
        loading: true,
        users: null
      }
    },
    async mounted () {
      this.users = (await UserService.getUsers()).data;
      this.loading = false;
    },
    methods: {
      showSwal: function (user_id) {
        swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function () {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success',
            $.post('/users/deleteUser?user_id=' + user_id),
            setTimeout(function () {
              window.location.href = '/users'
            },500)
          )
        })
      },
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
