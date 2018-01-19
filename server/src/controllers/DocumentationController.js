const {t_documentation} = require('../models');
const {users} = require('../models');


module.exports = {
    async getAllDocumentation(req, res) {
        try {
            users.hasMany(t_documentation,
                {
                    as: 'createdUser',
                    foreignKey: 'id'
                });
            // users.hasMany(t_documentation,
            //     {
            //         as: 'updatedUser',
            //         foreignKey: 'id'
            //     });

            t_documentation.belongsTo(users, {
                as: 'createdUser',
                foreignKey: 'documentation_user_created',
            });

            // t_documentation.belongsTo(users, {
            //     as: 'updatedUser',
            //     foreignKey: 'documentation_last_user_updated',
            // });

            const server = await t_documentation.findAll({
                where: {
                    'documentation_status': 1
                },
                //include: [{model: users, as: 'createdUser'}, {model: users, as: 'updatedUser'}]
                include: [users]
            });
            res.send(server);
        } catch (err) {
            console.log(err);
            res.status(404).send({
                error: err,
                "message": "Error"
            })
        }
    },

    // async getAllDocumentation (req, res) {
    //     try {
    //         users.hasMany(t_documentation, {foreignKey: 'id'});
    //         t_documentation.belongsTo(users, {foreignKey: 'documentation_user_created'});
    //         const server = await t_documentation.findAll({
    //             where: {
    //                 'documentation_status': 1
    //             },
    //             include: [users]
    //         });
    //         res.send(server);
    //     } catch (err){
    //         res.status(500).send({
    //             error: err,
    //             "message": "Error"
    //         })
    //     }
    // },

    async createDocument(req, res) {
        try {
            await t_documentation.create(req.body);
            res.redirect('/documentation');
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },

    async deleteDocument(req, res) {
        let values = req.body;
        let id = req.body.id;
        delete values.id;
        try {
            const document = await t_documentation.findOne({
                where: {
                    id: id
                }
            }).then(function (obj) {
                if (obj) {
                    return obj.update({
                        documentation_status: 2
                    });
                } else {
                    return t_documentation.create(values);
                }
            });
            res.send(document);
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },

    async updateDocument(req, res) {
        let values = req.body;
        let id = req.body.id;
        delete values.id;
        try {
            const document = await t_documentation.findOne({
                where: {
                    id: id
                }
            }).then(function (obj) {
                if (obj) {
                    return obj.update(values);
                } else {
                    return t_documentation.create(values);
                }
            });
            res.send(document);
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },


};