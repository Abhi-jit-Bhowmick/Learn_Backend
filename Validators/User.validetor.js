const Joi = require("joi");

const Schema = Joi.object().keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male", "female")
});


const getQuerryErrors = (incomingUserData) => {
    const result = Schema.validate(incomingUserData);
    return result.error
}

module.exports = { getQuerryErrors }