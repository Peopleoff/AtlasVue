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
                    <i class="material-icons">assignment</i> Documents
                    <div class="ripple-container"></div>
                  </a>
                </li>
                <li class="">
                  <a href="#attachments" data-toggle="tab" aria-expanded="false">
                    <i class="material-icons">code</i> Attachments
                    <div class="ripple-container"></div>
                  </a>
                </li>
                <li class="create" data-toggle="modal" data-target="#addAttachment">
                  <a>
                    <i class="material-icons">code</i> Add Attachment
                    <div class="ripple-container"></div>
                  </a>
                </li>
                <li class="create" data-toggle="modal" data-target="#createDocument">
                  <a>
                    <i class="material-icons">assignment</i> Add Document
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
                  <th class="text-center">Last Updated</th>
                  <th class="text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="document in documentation">
                  <td class="longText" v-on:click="viewDocument(document)">{{ document.documentation_title }}</td>
                  <td class="text-center"> By {{ document.user.user_firstname
                    }} on {{ document.createdAt | moment("dddd, MMMM Do YYYY") }}
                  </td>
                  <td class="td-actions text-center">
                    <div class="dropdown">
                      <button href="#" class="btn dropdown-toggle btn-simple" data-toggle="dropdown"
                              aria-expanded="true">
                        <i class="material-icons">more_horiz</i>
                      </button>
                      <ul class="dropdown-menu">
                        <router-link v-if="document.server_id" tag="li"
                                     :to="{name: 'displayServer', params: {id: document.id}}">
                          <a href="#">View Server</a>
                        </router-link>
                        <li>
                          <a v-on:click="editDocument(document)">Edit Document
                          </a>
                        </li>
                        <li>
                          <a v-on:click="deleteDocument(document)"> Delete Document
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane" id="attachments">
              <table class="table">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th class="text-center">Uploaded By</th>
                  <th class="text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="attachment in attachments">
                  <td class="longText">{{ attachment.attachment_name }}</td>
                  <td class="longText">{{ attachment.attachment_description }}</td>
                  <td class="text-center"> By {{ attachment.user.user_firstname
                    }} on {{ attachment.createdAt | moment("dddd, MMMM Do YYYY") }}
                  </td>
                  <td class="td-actions text-center">
                    <div class="dropdown">
                      <button href="#" class="btn dropdown-toggle btn-simple" data-toggle="dropdown"
                              aria-expanded="true">
                        <i class="material-icons">more_horiz</i>
                      </button>
                      <ul class="dropdown-menu">
                        <router-link v-if="attachment.server_id" tag="li"
                                     :to="{name: 'displayServer', params: {id: attachment.id}}">
                          <a href="#">View Server</a>
                        </router-link>
                        <li>
                          <a v-on:click="editDocument()">Edit Document
                            <i class="material-icons">edit</i>
                          </a>
                        </li>
                      </ul>
                    </div>
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

    <!--View Modal-->
    <div class="modal fade" id="viewDocument" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="material-icons">clear</i>
            </button>
            <h4 class="modal-title"></h4>
          </div>
          <hr>
          <div class="modal-body">
            <p>

            </p>
          </div>
          <div class="modal-footer" style="text-align: left">
            <hr>
          </div>
        </div>
      </div>
    </div>
    <!--View Modal-->

    <!--Edit Modal-->
    <div class="modal fade" id="editDocument" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="material-icons">clear</i>
            </button>
            <div class="modal-title">
              <input name="document_title" v-model="updateDocumentation.document_title">
            </div>
          </div>
          <div class="modal-body">
            <vue-editor v-model="updateDocumentation.document_description"></vue-editor>
            <input type="hidden" class="form-control" name="document_id" v-model="updateDocumentation.id">
            <button type="submit" class="btn btn-primary" style="width: 100%" id="serviceBtn"
                    v-on:click="updateDocument(document)">Update Document
              <div class="ripple-container"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Edit Modal-->

    <!--Create Modal-->
    <div class="modal fade" id="createDocument" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="material-icons">clear</i>
            </button>
            <div class="modal-title">
                <h4>Document Title</h4>
              <input name="document_title" v-model="document.document_title">
            </div>
          </div>
          <div class="modal-body">
            <h4>Document Description</h4>
            <vue-editor v-model="document.document_description"></vue-editor>
            <input type="hidden" class="form-control" name="document_id">
            <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="createDocument()">Add Document
              <div class="ripple-container"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Create Modal-->

    <!--Add Attachment Modal-->
    <div class="modal fade" id="addAttachment" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="material-icons">clear</i>
            </button>
            <div class="modal-title">
              <h3>Add Attachment</h3>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12 text-center">
                <div class="dropbox">
                  <input type="file" multiple :name="uploadFieldName" :disabled="isSaving"
                         @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                         class="input-file">
                  <p>
                    Drag your file(s) here to begin<br> or click to browse
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group label-floating">
                  <label class="control-label">File Name</label>
                  <input type="text" class="form-control" name="user_group">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group label-floating">
                  <label class="control-label">File Description</label>
                  <input type="text" class="form-control" name="user_group">
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="addAttachment()">Add Document
              <div class="ripple-container"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Add Attachment Modal-->


    <!-- end col-md-12 -->
  </div>
  <!-- end row -->

</template>

<script>
  import DocumentationService from '@/services/DocumentationService'
  import AttachmentService from '@/services/AttachmentService'
  import Loader from '@/components/includes/Loader'
  import { VueEditor } from 'vue2-editor'

  export default {
    name: 'Documentation',
    components: {
      Loader,
      VueEditor
    },
    data() {
      return {
        loading: true,
        documentation: null,
        attachments: null,
        document: {
          document_title: '',
          document_description: ''
        },
        updateDocumentation: {
          id: '',
          document_title: '',
          document_description: ''
        },
        addAttachment: {
          attachment_type_id: '',
          attachment_name: '',
          attachment_file: '',
          attachment_description: '',
          attachment_user_created: '',
        },
        isSaving: null,
        uploadFieldName: null,
      }
    },
    async mounted() {
      this.documentation = (await DocumentationService.getAllDocumentation()).data;
      this.attachments = (await AttachmentService.getAllAttachments()).data;
      this.loading = false

    },
    methods: {
      viewDocument: function (document) {
        let viewDocument = $('#viewDocument');
        let title = viewDocument.find('.modal-title');
        let body = viewDocument.find('p');
        title.html(document.documentation_title);
        body.html(document.documentation_note);
        viewDocument.modal('toggle');
      },
      editDocument: function (document) {
        this.updateDocumentation.document_title = document.documentation_title;
        this.updateDocumentation.document_description = document.documentation_note;
        this.updateDocumentation.id = document.id;
        $('#editDocument').modal('toggle');
      },
      createDocument() {
        try {
          DocumentationService.createDocument({
            documentation_title: this.document.document_title,
            documentation_note: this.document.document_description,
            documentation_last_user_updated: this.$store.state.user.id
          });
          location.reload();
        } catch (error) {
          this.error = error.response.data.error.details
        }
      },
      updateDocument() {
        try {
          DocumentationService.updateDocument({
            id: this.updateDocumentation.id,
            documentation_title: this.updateDocumentation.document_title,
            documentation_note: this.updateDocumentation.document_description,
            documentation_last_user_updated: this.$store.state.user.id
          });
          location.reload();
        } catch (error) {
          this.error = error.response.data.error.details
        }
      }
    },
    computed: {},
    filters: {
      moment: function (date) {
        return moment(date).calendar();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .create {
    float: right;
  }

  li {
    cursor: pointer;
  }

  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

</style>
