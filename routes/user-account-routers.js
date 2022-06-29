const { Router } = require('express');
const { body } = require('express-validator');

const router = Router();

const userAccountControllers = require('../controllers/user-account-controllers');

router.get('/login', userAccountControllers.getLoginPage);

router.post(
  '/login',
  [
    body('user-name').isLength({ min: 5 }).withMessage('Invalid user name'),
    body('user-password').isLength({ min: 5 }).withMessage('Invalid Password'),
  ],
  userAccountControllers.postLoginData
);

router.get('/signup', userAccountControllers.getSignupPage);

router.post(
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

router.get('/logout', userAccountControllers.getLogout);

module.exports = router;
