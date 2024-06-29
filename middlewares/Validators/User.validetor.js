const Joi = require("joi");

const Schema = Joi.object().keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male", "female")
});


const validateSearchQuery = (req, res, next) => {
    const { error } = Schema.validate(req.query);
    if (error) {
        res.status(422).json(error)
    }
    next()
}

module.exports = { validateSearchQuery }