const {users} = require('../models');
const {user_groups} = require('../models');

module.exports = {
    async getProfile (req, res) {
        try {
            const id = req.params.id;
            console.log(req.params);
            const server = await users.findById(req.params.id);
            res.send(server);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },
    async getUserGroups (req, res) {
        try {
                const userGroups = await user_groups.findAll();
                res.send(userGroups);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    },
    async getUsers (req, res) {
        try {
            const allUsers = await users.findAll();
            res.send(allUsers);
        } catch (err){
            res.status(500).send({
                error: err,
                "message": "Error"
            })
        }
    }
};