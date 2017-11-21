import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },

  login (credentails) {
    return Api().post('login', credentails)
  }
}
