const {celebrate,Joi} = require('celebrate');

module.exports = {
    UserCreateValidator: celebrate({
        body: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(12).required(),
            full_name: Joi.string().required()
        })
    })
}