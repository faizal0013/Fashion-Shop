const Cart = require('../modules/Cart');
const Product = require('../modules/Product');

const cart = new Cart();

const product = new Product();

exports.getShopDetails = (req, res) => {
  cart.getCartDetails(item => {
    cart.getTotal(total => {
      res.render('cart-details', {
        pageTitle: 'Cart Details',
        productDetails: item,
        total,
      });
    });
  });
};

exports.addToCartMenClotheById = (req, res) => {
  const { productId } = req.params;
  console.log('cart productId', productId);
  product.getMenClotesById(productId, data => {
    cart.addToCart(data);
  });
  res.redirect('/men-clothes');
};

exports.addToCartwomenClotheById = (req, res) => {
  const { productId } = req.params;
  console.log('cart productId', productId);
  res.redirect('/women-clothes');
};

exports.addToCartBabyClotheById = (req, res) => {
  const { productId } = req.params;
  console.log('cart productId', productId);
  res.redirect('/baby-clothes');
};
