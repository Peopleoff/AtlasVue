import Api from '@/services/Api'

export default {
  getAllDocumentation () {
    return Api().get('Documentation')
  },
  createDocument (document) {
    return Api().post('createDocument', document)
  },
  updateDocument (document) {
    return Api().post('updateDocument', document)
  },
  deleteDocument (id){
    return Api().post('deleteDocument', id)
  }
}
