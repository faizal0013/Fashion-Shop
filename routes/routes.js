const express = require('express');

const controllers = require('../controllers/controllers');

const routes = express.Router();

routes.get('/', controllers.getHome);

routes.get('/home', controllers.getHome);

routes.get('/cart-details', controllers.getShopDetails);

routes.get('/men-clothes', controllers.getManClothes);

// dynamic router
routes.get('/men-clothes/:productId', controllers.getManClothesProductId);

routes.get('/women-clothes', controllers.getWometClothes);

// dynamic router
routes.get('/women-clothes/:productId', controllers.getWometClothesProductId);

routes.get('/baby-clothes', controllers.getBabyClothes);

// dynamic router
routes.get('/baby-clothes/:productId', controllers.getBabyClothesProductId);

routes.get('/contact-us', controllers.getContactUs);

module.exports = routes;
