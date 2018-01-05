import Api from '@/services/Api'

export default {
  getAllAttachments () {
    return Api().get('Attachments')
  },
  uploadAttachment (attachment) {
    return Api().post('uploadAttachment', attachment)
  },
}
