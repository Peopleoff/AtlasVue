const {servers} = require('../models');
const {server_types} = require('../models');
const {locations} = require('../models');


module.exports = {

    async getAllLocations (req, res) {
        const location_id = req.params.location_id;
        try {
            if (location_id){
            const location = await locations.findAll({
                where: {
                    "id": location_id,
                },
                });
                res.send(location);
            } else{
                const location = await locations.findAll();
                res.send(location);
            }
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },
};