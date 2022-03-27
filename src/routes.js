const routes = require('express').Router();
const rescue = require('express-rescue');
const { eligibilityHandler, requirements } = require('./api/controllers/controller'); // Apagar função que mostra os requisitos
const checkData = require('./api/middlewares/middleware');

routes.post('/', rescue(checkData), eligibilityHandler);
routes.get('/requirements', requirements); // Apagar função que mostra os requisitos

module.exports = routes;
