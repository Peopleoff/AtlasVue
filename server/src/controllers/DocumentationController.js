const {t_documentation} = require('../models');
const {users} = require('../models');


module.exports = {
    async getAllDocumentation (req, res) {

        try {
            users.hasMany(t_documentation, {foreignKey: 'id'});
            t_documentation.belongsTo(users, {foreignKey: 'documentation_user_created'});
            t_documentation.belongsTo(users, {foreignKey: 'documentation_last_user_updated'});
            const server = await t_documentation.findAll({
                where: {
                    'documentation_status': 1
                },
                include: [users]
            });
            res.send(server);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },
};