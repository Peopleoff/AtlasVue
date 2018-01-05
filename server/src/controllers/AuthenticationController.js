const {users} = require('../models');
const {server_user_groups} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const common = require('../common/common');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {

    async register(req, res) {
        let body = `Welcome to Atlas. Please visit <a href="172.16.9.34">Atlas</a> to Login. Your username is <strong>${req.body.user_login}</strong> and your Temporary password is <strong>${req.body.user_password}</strong> It is recommended that you change your password on first login. Or don't. It's randomly generated and secure already.`;
        try {
            const user = await users.create(req.body);
            common.sendEmail(req.body.user_email,'User Registered for Atlas', body);
            res.send(user);
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },

    async login(req, res) {
        try {
            const {user_login, user_password} = req.body;

            const loginUser = await users.find({
                where: {
                    user_login: user_login
                }
            });
            if (!loginUser) {
                return res.status(400).send({
                    error: 'login information is incorrect'
                })
            }

            const validPassword = loginUser.comparePassword(user_password);
            if (!validPassword) {
                return res.status(403).send({
                    error: 'login information is incorrect'
                })
            }

            const userJson = loginUser.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        } catch (err) {
            res.status(500).send({
                error: err,
                message: 'failed login'
            })
        }
    },

    async isAuth(req, res) {

        if (req.body.user_group === 1) {
            res.send(true);
        } else {
            try {
                const {user_id, user_group_id, server_id} = req.body;
                const isAuth = await server_user_groups.findOne({
                    where: {
                        server_id: server_id,
                        [Op.or]: [{user_id: user_id}, {user_group_id: user_group_id}]
                    }
                });
                if (isAuth) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            } catch (err) {
                res.status(500).send({
                    error: err,
                    message: 'failed login'
                })
            }
        }
    },

    async decryptPassword(req, res) {
        try {
            let decryptedPassword = common.decrypt(req.body.password);
            res.send(decryptedPassword);
        } catch (err) {
            res.status(400).send({
                error: err,
                message: 'failed'
            })
        }
    },
};