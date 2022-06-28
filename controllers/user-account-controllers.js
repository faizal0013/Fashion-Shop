const bcript = require('bcryptjs');

const User = require('../modules/User');

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
/*
 if (!data) {
        bcript.hash(userPassword, 12).then(pass => {
          const user = new User({
            name: name,
            email: email,
            'user-name': userName,
            'user-password': pass,
            admin,
          });

          user
            .save()
            .then(data => {
              return res.redirect('/login');
            })
            .catch(err => console.log(err));
        });
      }
      res.redirect('/home');
*/
exports.postSignupData = (req, res) => {
  const { name, email, 'user-name': userName, 'user-password': userPassword, admin } = req.body;

  User.findOne({ 'user-name': userName, email })
    .then(data => {
      if (data) return res.redirect('/');
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

exports.postLoginData = (req, res) => {
  const { 'user-name': userName, 'user-password': userPassword } = req.body;

  User.findOne({ 'user-name': userName })
    .then(data => {
      if (!data) return res.redirect('/login');

      return bcript.compare(userPassword, data['user-password']);
    })
    .then(pass => {
      if (pass) {
        return res.redirect('/');
      }
      res.redirect('/login');
    })
    .catch(err => console.log('err', err));
};
