const { Router } = require('express');

const routers = Router();

const cart = require('../controllers/cart-controllers');

routers.get('/cart-details', cart.getShopDetails);

routers.get('/add-cart/men-clothe/:productId', cart.addToCartMenClotheById);

routers.get('/add-cart/women-clothe/:productId', cart.addToCartwomenClotheById);

routers.get('/add-cart/baby-clothe/:productId', cart.addToCartBabyClotheById);

module.exports = routers;
