const { Router } = require('express');
const { body } = require('express-validator');

const routers = Router();

const userAccountControllers = require('../controllers/user-account-controllers');

routers.get('/login', userAccountControllers.getLoginPage);

routers.post(
  '/login',
  [
    body('user-name').isLength({ min: 5 }).withMessage('Invalid user name'),
    body('user-password').isLength({ min: 5 }).withMessage('Invalid Password'),
  ],
  userAccountControllers.postLoginData
);

routers.get('/signup', userAccountControllers.getSignupPage);

routers.post(
  '/signup',
  [
    body('name').isLength({ min: 5 }).withMessage('Invalid name'),
    body('email').isEmail().withMessage('Invalid email'),
    body('user-name').isLength({ min: 5 }).withMessage('Invalid user name'),
    body('user-password').isLength({ min: 5 }).withMessage('Invalid user password'),
    body('conform-password')
      .isLength({ min: 5 })
      .withMessage('Invalid user conform password')
      .custom((value, { req }) => value === req.body['user-password'])
      .withMessage('password is not match'),
  ],
  userAccountControllers.postSignupData
);

module.exports = routers;
