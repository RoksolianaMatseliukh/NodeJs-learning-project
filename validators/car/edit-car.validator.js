const Joi = require('joi');

const { dateEnum: { CURRENT_YEAR, MIN_MANUFACTURE_CAR_YEAR } } = require('../../constants');

module.exports = Joi.object({
    model: Joi.string().trim().alphanum().min(2)
        .max(25)
        .optional(),
    price: Joi.number().positive().optional(),
    year: Joi.number().integer().min(MIN_MANUFACTURE_CAR_YEAR).max(CURRENT_YEAR)
        .optional()
});
