<template>
  <Loader v-if="loading"></Loader>
  <div class="row" v-else>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-tabs" data-background-color="rose">
          <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
              <ul class="nav nav-tabs" data-tabs="tabs">
                <li class="active">
                  <a href="#documents" data-toggle="tab" aria-expanded="true">
                    <i class="material-icons">bug_report</i> Documents
                    <div class="ripple-container"></div>
                  </a>
                </li>
                <li class="">
                  <a href="#attachments" data-toggle="tab" aria-expanded="false">
                    <i class="material-icons">code</i> Attachments
                    <div class="ripple-container"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="tab-content">
            <div class="tab-pane active" id="documents">
              <table class="table">
                <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th class="text-center">Created By</th>
                  <th class="text-center">Last Updated</th>
                  <th class="text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="document in documentation">
                  <td>{{ document.documentation_title }}</td>
                  <td class="longText">{{ document.documentation_note }}</td>
                  <td class="text-center">By {{ document.user_firstname
                    }} on {{ document.documentation_date_created }}
                  </td>
                  <td class="text-center" v-if="document.documentation_last_updated_date">By {{ document.user_firstname
                    }} on {{ document.documentation_last_updated_date }}
                  </td>
                  <td class="text-center" v-else></td>
                  <td class="td-actions text-center">
                    <a v-bind:href="'/serverDisplay?serverID='+document.server_id" type="button" rel="tooltip"
                       class="btn btn-info">
                      <i class="material-icons">description</i>
                    </a>
                    <button type="button" rel="tooltip" class="btn btn-success">
                      <i class="material-icons">edit</i>
                    </button>
                    <button type="button" rel="tooltip" class="btn btn-danger">
                      <i class="material-icons">close</i>
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane" id="attachments">
              <table class="table">
                <tbody>
                <tr>
                  <td>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="optionsCheckboxes" checked=""><span class="checkbox-material"><span
                        class="check"></span></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                  </td>
                  <td class="td-actions text-right">
                    <button type="button" rel="tooltip" title="" class="btn btn-primary btn-simple btn-xs"
                            data-original-title="Edit Task">
                      <i class="material-icons">edit</i>
                    </button>
                    <button type="button" rel="tooltip" title="" class="btn btn-danger btn-simple btn-xs"
                            data-original-title="Remove">
                      <i class="material-icons">close</i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="optionsCheckboxes"><span class="checkbox-material"><span
                        class="check"></span></span>
                      </label>
                    </div>
                  </td>
                  <td>Sign contract for "What are conference organizers afraid of?"</td>
                  <td class="td-actions text-right">
                    <button type="button" rel="tooltip" title="" class="btn btn-primary btn-simple btn-xs"
                            data-original-title="Edit Task">
                      <i class="material-icons">edit</i>
                    </button>
                    <button type="button" rel="tooltip" title="" class="btn btn-danger btn-simple btn-xs"
                            data-original-title="Remove">
                      <i class="material-icons">close</i>
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!--  end card  -->
    </div>
    <!-- end col-md-12 -->
  </div>
  <!-- end row -->

</template>

<script>
  import DocumentationService from '@/services/DocumentationService'
  import Loader from '@/components/includes/Loader'

  export default {
    name: 'Documentation',
    components: {
      Loader
    },
    data() {
      return {
        loading: true,
        documentation: {},
      }
    },
    async mounted() {
      this.documentation = (await DocumentationService.getAllDocumentation()).data;
      this.loading = false

    },
    methods: {},
    computed: {},
    filters: {
      moment: function (date) {
        return moment(date).subtract(10, 'days').calendar();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
