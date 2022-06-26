exports.getLoginPage = (req, res) => {
  res.render('user/login', {
    pageTitle: 'login',
  });
};

exports.getSignupPage = (req, res) => {
  res.render('user/signup', {
    pageTitle: 'signup',
  });
};
