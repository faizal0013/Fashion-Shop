const { Router } = require('express');

const routers = Router();

const userAccountControllers = require('../controllers/user-account-controllers');

routers.get('/login', userAccountControllers.getLoginPage);

routers.post('/login', userAccountControllers.postLoginData);

routers.get('/signup', userAccountControllers.getSignupPage);

routers.post('/signup', userAccountControllers.postSignupData);

module.exports = routers;
