const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = {
            user_firstname: Joi.string().required(),
            user_lastname: Joi.string().required(),
            user_login: Joi.string().required(),
            user_work_phone: Joi.string(),
            user_mobile_phone: Joi.string(),
            user_password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{4,32}')),
            user_group: Joi.number().integer().required(),
            user_email: Joi.string().email()
        };

        const {error, value} = Joi.validate(req.body, schema);

        if (error) {
            console.log(error);
            switch (error.details[0].context.key) {
                case 'user_login':
                    res.status(400).send({
                        error: 'Login must be a string'
                    });
                    break;
                case 'user_password':
                    res.status(400).send({
                        error: `The password provided must be greater then 4 characters.`
                    });
                    break;
                default:
                    res.status(400).send({
                        error: error
                    })
            }
        } else {
            next()
        }
    },

    changePassword(req, res, next) {
        const schema = {
            id: Joi.number(),
            newPassword: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{4,32}')),
            newPassword2: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{4,32}')),
        };

        const {error, value} = Joi.validate(req.body, schema);

        if (error) {
            console.log(error);
            switch (error.details[0].context.key) {
                case 'newPassword2':
                    res.status(400).send({
                        error: `The password provided must be greater then 5 characters.`
                    });
                    break;
                default:
                    res.status(400).send({
                        error: error
                    })
            }
        } else {
            next()
        }
    }
};