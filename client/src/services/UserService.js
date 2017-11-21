import Api from '@/services/Api'

export default {
  getProfile (id) {
    return Api().post('Profile', id)
  },
  getUserGroups () {
    return Api().get('getUserGroups')
  }
}
