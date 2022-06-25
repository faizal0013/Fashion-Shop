const { Router } = require('express');

const routers = Router();

const cartControllers = require('../controllers/cart-controllers');

routers.get('/cart-details', cartControllers.getShopDetails);

routers.get('/add-cart/men-clothe/:productId', cartControllers.addToCartMenClotheById);

routers.get('/add-cart/women-clothe/:productId', cartControllers.addToCartwomenClotheById);

routers.get('/add-cart/baby-clothe/:productId', cartControllers.addToCartBabyClotheById);

routers.get('/remove-from-cart/:productId', cartControllers.removeFromCartById);

module.exports = routers;
