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

  const imgPath = `/images/${img}`;

  const product = new Product({
    tag,
    img: imgPath,
    imgAlt: 'clothes',
    clothesName,
    price,
  });

  console.log(product);
  // product.save();

  res.redirect('/');
};
