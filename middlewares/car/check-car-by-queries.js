const { carQueryBuilder } = require('../../helpers');
const { carService } = require('../../services');
const { statusMessagesEnum: { NO_ENTITY_FOUND } } = require('../../constants');

module.exports = async (req, res, next) => {
    try {
        const { offset, limit, ...where } = await carQueryBuilder(req.query);

        const foundCars = await carService.getCars(where, offset, limit);

        if (!foundCars.length) {
            req.message = NO_ENTITY_FOUND;
        } else {
            req.cars = foundCars;
        }

        next();
    } catch (e) {
        next(e);
    }
};
