const express = require('express');

const router = express.Router();

const controllers = require('../controllers/controllers');

router.get('/', controllers.getHome);

router.get('/home', controllers.getHome);

router.get('/men-clothes', controllers.getManClothes);

// dynamic router
router.get('/men-clothes/:productId', controllers.getManClothesProductId);

router.get('/women-clothes', controllers.getWometClothes);

// dynamic router
router.get('/women-clothes/:productId', controllers.getWometClothesProductId);

router.get('/baby-clothes', controllers.getBabyClothes);

// dynamic router
router.get('/baby-clothes/:productId', controllers.getBabyClothesProductId);

router.get('/contact-us', controllers.getContactUs);

module.exports = router;
