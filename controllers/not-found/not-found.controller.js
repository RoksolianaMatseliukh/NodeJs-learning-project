const { ErrorHandler, customErrors: { NOT_FOUND_ROUTE } } = require('../../errors');

module.exports = {
    allNotFoundRoutes: (req, res, next) => {
        try {
            throw new ErrorHandler(
                NOT_FOUND_ROUTE.message,
                NOT_FOUND_ROUTE.code,
                NOT_FOUND_ROUTE.customCode
            );
        } catch (e) {
            next(e);
        }
    }
};
