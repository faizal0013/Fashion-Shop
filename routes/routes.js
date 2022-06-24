const express = require('express');

const routers = express.Router();

const controllers = require('../controllers/controllers');

routers.get('/', controllers.getHome);

routers.get('/home', controllers.getHome);

routers.get('/men-clothes', controllers.getManClothes);

// dynamic router
routers.get('/men-clothes/:productId', controllers.getManClothesProductId);

routers.get('/women-clothes', controllers.getWometClothes);

// dynamic router
routers.get('/women-clothes/:productId', controllers.getWometClothesProductId);

routers.get('/baby-clothes', controllers.getBabyClothes);

// dynamic router
routers.get('/baby-clothes/:productId', controllers.getBabyClothesProductId);

routers.get('/contact-us', controllers.getContactUs);

module.exports = routers;
