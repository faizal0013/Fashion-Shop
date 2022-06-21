const MANCLOTESITEM = require('../data/MANCLOTESITEM');
const cart = require('../data/cart');

exports.getHome = (req, res) => {
  res.render('index', {
    pageTitle: 'Fashion Shop',
    trandingWeekBox1: [
      'images/tranding_1.jpg',
      'images/tranding_2.jpg',
      'images/tranding_3.jpg',
      'images/tranding_4.jpg',
    ],
    trandingWeekBox2: [
      'images/tranding_4.jpg',
      'images/tranding_3.jpg',
      'images/tranding_2.jpg',
      'images/tranding_1.jpg',
    ],
    latestNews: ['images/latest-news-1.jpg', 'images/latest-news-2.jpg', 'images/latest-news-3.jpg'],
  });
};

exports.getShopDetails = (req, res) => {
  const totalPrice = () => {
    let price = 0;
    cart.forEach(el => {
      price += el.price;
    });
    return price;
  };

  res.render('cart-details', {
    pageTitle: 'Cart Details',
    productDetails: cart,
    totalPrice,
  });
};

exports.getManClothes = (req, res) => {
  res.render('men-clothes', {
    pageTitle: 'Men Clothes',
    item: MANCLOTESITEM,
  });
};

exports.getManClothesProductId = (req, res) => {
  const productId = Number(req.params.productId);
  const product = MANCLOTESITEM.find(product => product._id === productId);
  cart.push(product);
  res.redirect('/men-clothes');
};
