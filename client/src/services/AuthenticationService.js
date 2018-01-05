import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },

  login (credentails) {
    return Api().post('login', credentails)
  },

  isAuth (credentails){
    return Api().post('isAuth', credentails)
  },

  decryptPassword (password) {
    return Api().post('decryptPassword', password)
  }
}
