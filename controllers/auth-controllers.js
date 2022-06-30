const Product = require('../modules/Product');

exports.getAdminPage = (req, res) => {
  res.render('admin/admin-page', {
    pageTitle: 'Admin ',
    loggin: req.session.isLoggin,
    admin: req.session.admin,
  });
};

exports.postAdminData = (req, res) => {
  const { clothesName, tag, img, price } = req.body;

  if (!error.isEmpty()) {
    return res.status(422).redirect('/admin/admin-page');
  }

  const imgPath = `/images/${tag}/${img}`;

  const product = new Product({
    tag,
    img: imgPath,
    imgAlt: 'clothe',
    clothesName,
    price,
  });

  console.log(product);
  // product.save();

  res.redirect('/');
};
