import Api from '@/services/Api'

export default {

  getAllServices () {
    return Api().get('Services')
  },

  updateService (service) {
    return Api().post('linkService', service)
  },

  deleteService (service) {
    return Api().post('deleteService', service)
  },
}
