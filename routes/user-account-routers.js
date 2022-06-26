const { Router } = require('express');

const routers = Router();

const userAccountControllers = require('../controllers/user-account-controllers');

routers.get('/login', userAccountControllers.getLoginPage);

routers.get('/signup', userAccountControllers.getSignupPage);

module.exports = routers;
