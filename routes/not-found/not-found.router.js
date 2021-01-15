const { Router } = require('express');

const { notFoundController } = require('../../controllers');

const notFoundRouter = Router();

notFoundRouter.all('*', notFoundController.allNotFoundRoutes);

module.exports = notFoundRouter;
