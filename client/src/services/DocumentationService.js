import Api from '@/services/Api'

export default {
  getAllDocumentation () {
    return Api().get('Documentation')
  },
}
