const { Router } = require('express');

const router = Router();

const cartControllers = require('../controllers/cart-controllers');

router.get('/cart-details', cartControllers.getShopDetails);

router.get('/add-cart/men-clothe/:productId', cartControllers.addToCartMenClotheById);

router.get('/add-cart/women-clothe/:productId', cartControllers.addToCartwomenClotheById);

router.get('/add-cart/baby-clothe/:productId', cartControllers.addToCartBabyClotheById);

router.get('/remove-from-cart/:productId', cartControllers.removeFromCartById);

module.exports = router;
