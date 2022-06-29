exports.get404Error = (req, res) => {
  res.status(404).render('404.ejs', {
    pageTitle: 'page not found',
    loggin: req.session.isLoggin,
  });
};
