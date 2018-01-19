const {servers} = require('../models');
const {server_types} = require('../models');
const {services} = require('../models');
const {racks} = require('../models');
const {server_vm_host} = require('../models');
const {server_hardware} = require('../models');
const {server_services} = require('../models');
const Sequelize = require('sequelize');


module.exports = {

  async getAllServers (req, res) {
    const location_id = req.params.location_id;
    try {
      server_types.hasMany(servers, {foreignKey: 'id'});
      servers.belongsTo(server_types, {foreignKey: 'server_type_id'});
      const server = await servers.findAll({
        where: {
          "location_id": location_id,
          "server_status_id": 1
        },
        include: [server_types]

      });
      res.send(server);
    } catch (err){
      res.status(500).send({
        error: err,
        "message": "Error"
      })
    }
  },
    async getAllRacks (req, res) {
        const location_id = req.params.location_id;
        try {
            const rack = await racks.findAll({
                where: {
                    "rack_location": location_id,
                },
            });
            res.send(rack);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },
    async DisplayServer (req, res) {
        const id = req.params.id;
        services.belongsToMany(servers, {
            through: server_services,
            foreignKey: 'service_id_fk'
        });
        servers.belongsToMany(services, {
            through: server_services,
            foreignKey: 'server_id'
        });

        servers.hasOne(server_hardware, { foreignKey: 'server_id' });
        servers.hasMany(server_vm_host, { foreignKey: 'server_vm_host_server_id' });
        server_vm_host.belongsTo(servers, { foreignKey: 'server_vm_vm_id'});
        Sequelize.query("SELECT * FROM server_vm_host JOIN servers on server_vm_host.server_vm_host_server_id = servers.id WHERE server_vm_host_server_id = " + id).spread((results, metadata) => {
            // Results will be an empty array and metadata will contain the number of affected rows.
            let serve_vms = results;
        });
        try {
            const server = await servers.findOne({
                where: {
                    "id": id,
                    "server_status_id": 1
                },
                include: [services, server_hardware]
            });
            res.send(server);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },
  async getAllServersTypes (req, res) {
    try {
      const serverTypes = await server_types.findAll();
      res.send(serverTypes);
    } catch (err){
      res.status(500).send({
        error: err,
        "message": "Error"
      })
    }
  },
    async addServer (req, res) {
        try {
            const server = await servers.create(req.body);
            res.send(server)
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },

    async updateServer (req, res) {
        try {
            const service = await servers.findOne({
                where: {
                    id: req.body.id
                }
            }).then(function (obj) {
                if(obj){
                    return obj.update(req.body);
                } else {
                    return servers.create(req.body);
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