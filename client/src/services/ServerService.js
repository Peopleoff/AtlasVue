import Api from '@/services/Api'

export default {

  getAllServers (location_id) {
    return Api().get(`Servers/${location_id}`)
  },
  getAllRacks (location_id) {
    return Api().get(`Racks/${location_id}`)
  },
  getAllServerTypes () {
    return Api().get('ServerTypes')
  },
  showServer (id) {
    return Api().get(`DisplayServer/${id}`)
  },
  updateServer (server) {
    return Api().post('updateServer', server)
  }
}
