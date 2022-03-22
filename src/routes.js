const routes = require('express').Router();
const { eligibilityHandler, requirements } = require('./api/controllers/controller'); // Apagar função que mostra os requisitos

routes.post('/', eligibilityHandler);
routes.get('/requirements', requirements); // Apagar função que mostra os requisitos

module.exports = routes;
