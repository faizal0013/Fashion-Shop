const express = require('express');

const controllers = require('../controllers/controllers');

const routes = express.Router();

routes.get('/', controllers.getHome);

routes.get('/home', controllers.getHome);

routes.get('/cart-details', controllers.getShopDetails);

routes.get('/men-clothes', controllers.getManClothes);

routes.get('/men-clothes/:productId', controllers.getManClothesProductId);

module.exports = routes;
