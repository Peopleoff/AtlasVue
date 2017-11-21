const {User} = require('../models');
const {user_groups} = require('../models');

module.exports = {
    async getProfile (req, res) {
        try {
            const {user_id} = req.body;
            if(user_id){
                const server = await User.findOne({
                    where: {
                        id: user_id
                    }
                });
                res.send(server);
            } else {
                const server = await User.findOne();
                res.send(server);
            }

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
    }
};