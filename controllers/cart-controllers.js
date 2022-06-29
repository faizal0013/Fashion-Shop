const Cart = require('../modules/Cart');
const product = require('../modules/Product');
const User = require('../modules/User');

exports.getShopDetails = (req, res) => {
  Cart.find().then(item => {
    let total = 0;
    item.forEach(items => {
      total += items.price;
    });
    res.render('cart-details', {
      pageTitle: 'Cart Details',
      productDetails: item,
      total,
      loggin: req.session.isLoggin,
    });
  });
};

exports.removeFromCartById = (req, res) => {
  const { productId } = req.params;

  console.log(productIxd);

  Cart.findByIdAndRemove(productId)
    .then(data => console.log(data))
    .catch(err => console.log(err));

  res.redirect('/cart-details');
};

exports.addToCartMenClotheById = (req, res) => {
  const { productId } = req.params;
  product
    .findById(productId)
    .then(productData => {
      const cart = new Cart({
        ProductId: productData._id,
        img: productData.img,
        imgAlt: productData.imgAlt,
        clothesName: productData.clothesName,
        price: productData.price,
      });
      User.findById(req.session.user._id).then(data => {
        data.carts.push(cart._id);
        data.save();
      });

      cart.save();

      res.redirect('/men-clothes');
    })
    .catch(err => console.log('addToCartMenClotheById', err));
};

exports.addToCartwomenClotheById = (req, res) => {
  const { productId } = req.params;

  product
    .findById(productId)
    .then(data => {
      const cart = new Cart({
        ProductId: data._id,
        img: data.img,
        imgAlt: data.imgAlt,
        clothesName: data.clothesName,
        price: data.price,
      });
      User.findById(req.session.user._id).then(data => {
        data.carts.push(cart._id);
        data.save();
      });
      cart.save();
      res.redirect('/women-clothes');
    })
    .catch(err => console.log('addToCartwomenClotheById', err));
};

exports.addToCartBabyClotheById = (req, res) => {
  const { productId } = req.params;

  product
    .findById(productId)
    .then(data => {
      const cart = new Cart({
        ProductId: data._id,
        img: data.img,
        imgAlt: data.imgAlt,
        clothesName: data.clothesName,
        price: data.price,
      });
      User.findById(req.session.user._id).then(data => {
        data.carts.push(cart._id);
        data.save();
      });
      cart.save();
      res.redirect('/baby-clothes');
    })
    .catch(err => console.log('addToCartBabyClotheById', err));
};
