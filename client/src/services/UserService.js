import Api from '@/services/Api'

export default {
  getProfile (id) {
    return Api().get(`Profile/${id}`)
  },
  getUserGroups () {
    return Api().get('getUserGroups')
  },
  getUsers () {
    return Api().get('Users')
  }
}
