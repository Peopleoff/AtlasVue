import Api from '@/services/Api'

export default {

  getAllLocations (location_id) {
    return Api().get(`locations/${location_id}`)
  },
  getLocation (location_id) {
    return Api().get(`location/${location_id}`)
  }
}
