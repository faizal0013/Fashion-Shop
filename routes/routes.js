const express = require('express');

const controller = require('../controllers/controller');

const routes = express.Router();

routes.get('/', controller.getHome);

routes.get('/home', controller.getHome);

module.exports = routes;
