const {t_documentation} = require('../models');
const {users} = require('../models');
const {attachments} = require('../models');


module.exports = {
    async getAllAttachments (req, res) {
        try {
            users.hasMany(attachments, {foreignKey: 'id'});
            attachments.belongsTo(users, {foreignKey: 'attachment_user_created'});
            const attachment = await attachments.findAll({
                include: [users]
            });
            res.send(attachment);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },

    async addAttachment (req, res) {
        try {
            await attachments.create(req.body);
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },
};