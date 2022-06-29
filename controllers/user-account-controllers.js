const bcript = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../modules/User');

exports.getLoginPage = (req, res) => {
  res.render('user/login', {
    pageTitle: 'login',
    loggin: req.session.isLoggin,
  });
};

exports.postLoginData = (req, res) => {
  const { 'user-name': userName, 'user-password': userPassword } = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    // console.log(error.array());
    return res.status(422).redirect('/login');
  }

  User.findOne({ 'user-name': userName })
    .then(user => {
      if (!user) return res.redirect('/login');
      req.session.user = user;
      return bcript.compare(userPassword, user['user-password']);
    })
    .then(password => {
      if (password) {
        req.session.isLoggin = true;
        return res.redirect('/');
      }
      res.redirect('/login');
    })
    .catch(err => console.log('err', err));
};

exports.getSignupPage = (req, res) => {
  res.render('user/signup', {
    pageTitle: 'signup',
    loggin: req.session.isLoggin,
  });
};

exports.postSignupData = (req, res) => {
  const { name, email, 'user-name': userName, 'user-password': userPassword, admin } = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    // console.log(error.array());
    return res.status(422).redirect('/signup');
  }

  User.findOne({ 'user-name': userName, email })
    .then(data => {
      if (data) {
        return res.redirect('/');
      }

      bcript.hash(userPassword, 12).then(hashPassword => {
        const user = User({
          name: name,
          email: email,
          'user-name': userName,
          'user-password': hashPassword,
          admin,
        });
        user.save();
        res.redirect('/login');
      });
    })
    .catch(err => {});
};

exports.getLogout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
