const bcript = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../modules/User');

exports.getLoginPage = (req, res) => {
  const loginErrMessage = req.flash('login-err');

  res.render('user/login', {
    pageTitle: 'login',
    loggin: req.session.isLoggin,
    admin: req.session.admin,
    loginErrMessage,
  });
};

exports.postLoginData = async (req, res) => {
  const { 'user-name': userName, 'user-password': userPassword } = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    // console.log(error.array());
    return res.status(422).redirect('/login');
  }
  try {
    const record = await User.findOne({ 'user-name': userName });

    req.flash('login-err', 'invalid user-name and password!');

    if (!record) return res.redirect('/login');

    const isCompare = await bcript.compare(userPassword, record['user-password']);

    req.flash('login-err', 'invalid username and password!');

    if (!isCompare) return res.redirect('/login');

    req.session.isLoggin = true;
    req.session.user = record;

    if (record.admin) req.session.admin = true;

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

exports.getSignupPage = (req, res) => {
  const signupErr = req.flash('signup-err');
  const signupSuccess = req.flash('signup-success');

  res.render('user/signup', {
    pageTitle: 'signup',
    loggin: req.session.isLoggin,
    admin: req.session.admin,
    signupErr,
    signupSuccess,
  });
};

exports.postSignupData = async (req, res) => {
  const { name, email, 'user-name': userName, 'user-password': userPassword, admin } = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    // console.log(error.array());
    return res.status(422).redirect('/signup');
  }

  try {
    const record = await User.findOne({ 'user-name': userName, email });

    if (record) {
      req.flash('signup-err', 'This ID have already have an account');
      return res.redirect('/signup');
    }

    const hashPassword = await bcript.hash(userPassword, 12);

    const user = User({
      name: name,
      email: email,
      'user-name': userName,
      'user-password': hashPassword,
      admin,
    });
    user.save();

    req.flash('signup-success', 'account is create successfully');

    res.redirect('/signup');
  } catch (error) {
    console.log(error);
  }
};

exports.getLogout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
