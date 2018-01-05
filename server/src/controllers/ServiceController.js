const {services} = require('../models');
const {server_services} = require('../models');
const common = require('../common/common');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    async getAllServices (req, res) {
        try {
            const service = await services.findAll();
            res.send(service);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },

    async addService (req, res) {
        try {
            await services.create(req.body);
            res.send(services)
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },

     async deleteService (req, res) {
        console.log(req.body);
        try{
            await server_services.destroy({
                where: {
                    [Op.and]: [{server_id: req.body.server_id}, {service_id_fk: req.body.service_id}]
                }
            });
            res.send('yes');
        } catch(err){
                res.status(400).send({
                    error: err,
                    message: 'failed'
                })
        }
    },

    async updateLinkService (req, res) {
        let ServiceObj = {
            server_id: req.body.server_id,
            service_id_fk: req.body.service_id,
            service_port: req.body.service_port,
            service_login: req.body.service_login,
            service_password: common.doesMatch(req.body.service_password),
        };
        let id = req.body.id;
        try {
            const service = await server_services.findOne({
                where: {
                    [Op.and]: [{server_id: req.body.server_id}, {service_id_fk: req.body.service_id}]
                }
            }).then(function (obj) {
                if(obj){
                    return obj.update(ServiceObj);
                } else {
                    return server_services.create(ServiceObj);
                }
            });
            res.send(service);
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },
};