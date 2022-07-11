const fs = require('fs');
const path = require('path');

const Product = require('../modules/Product');

exports.getAdminPage = (req, res) => {
  res.render('admin/admin-page', {
    pageTitle: 'Admin',
    loggin: req.session.isLoggin,
    admin: req.session.admin,
  });
};

exports.postAdminData = (req, res) => {
  const { clothesName, tag, price } = req.body;

  const imgPath = `/images/${req.file.filename}`;

  const product = new Product({
    tag,
    img: imgPath,
    imgAlt: 'clothes',
    clothesName,
    price,
    adminName: req.session.user['user-name'],
  });

  product.save();

  res.redirect('/');
};

exports.getAdminUpdatePage = async (req, res) => {
  const { productId } = req.params;

  const { update } = req.query;

  try {
    if (update) {
      const product = await Product.findById(productId);

      res.render('admin/admin-update', {
        pageTitle: 'Admin Update',
        loggin: req.session.isLoggin,
        admin: req.session.admin,
        product,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postAdminUpdateData = async (req, res) => {
  const { productId } = req.params;
  const { clothesName, tag, price } = req.body;
  try {
    const product = await Product.findById(productId);

    if (req.file) {
      const { img } = product;

      fs.unlink(path.join(__dirname, '..', 'public', img), err => {
        console.log(err);
      });

      product.img = `/images/${req.file.filename}`;
    }

    (product.clothesName = clothesName), (product.tag = tag), (product.price = price);

    product.save();

    res.redirect(`/${tag}`);
  } catch (error) {
    console.log(error);
  }
};

exports.getAdminRemoveData = async (req, res) => {
  const { productId } = req.params;
  const { remove } = req.query;

  try {
    if (remove) {
      const product = await Product.findByIdAndRemove(productId);
      const { img } = product;

      fs.unlink(path.join(__dirname, '..', 'public', img), err => {
        console.log(err);
      });

      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
  }
};
