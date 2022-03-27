const express = require('express');
const error = require('./api/middlewares/error');

const app = express();

app.use(express.json());

app.use(require('./routes'));

app.use(express.static('public'));

app.use(error);

module.exports = app;
