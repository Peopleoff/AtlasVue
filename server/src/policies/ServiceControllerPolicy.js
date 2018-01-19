const Joi = require('joi');

module.exports = {
    addService(req, res, next) {
        const schema = {
            service_name: Joi.string().required(),
            service_description: Joi.string().required()

        };

        const {error, value} = Joi.validate(req.body, schema);

        if (error) {
            console.log(error);
            switch (error.details[0].context.key) {
                case 'service_name':
                    res.status(400).send({
                        error: 'Please Enter a Service Name.'
                    });
                    break;
                case 'service_description':
                    res.status(400).send({
                        error: `Please Enter a Service Description.`
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