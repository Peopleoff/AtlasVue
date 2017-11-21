import Api from '@/services/Api'

export default {

  getAllServers (location_id) {
    console.log(location_id.location_id);
    return Api().get('Servers', location_id.location_id)
  },
  getAllServerTypes () {
    return Api().get('ServerTypes')
  },
  showServer (id) {
    console.log(id);
    return Api().get('DisplayServer', id)
  }
}
