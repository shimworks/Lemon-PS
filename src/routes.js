const routes = require('express').Router();
const rescue = require('express-rescue');
const { eligibilityHandler } = require('./api/controllers/controller');
const checkData = require('./api/middlewares/middleware');

routes.post('/', rescue(checkData), eligibilityHandler);

module.exports = routes;
