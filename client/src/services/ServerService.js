import Api from '@/services/Api'

export default {

  getAllServers (location_id) {
    return Api().post('Servers', location_id)
  },
  getAllServerTypes () {
    return Api().get('ServerTypes')
  },
  showServer (id) {
    console.log(id);
    return Api().post('DisplayServer', id)
  }
}
