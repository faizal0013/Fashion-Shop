const Product = require('../modules/Product');

const product = new Product();

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
  product.getMenClotes(data => {
    res.render('view-clothes', {
      pageTitle: 'Men Clothes',
      item: data,
      url: 'men-clothes',
      addToCard: 'add-cart/men-clothe',
    });
  });
};

// dynamic router controlls
exports.getManClothesProductId = (req, res) => {
  const productId = req.params.productId;
  product.getMenClotesById(productId, data => {
    res.render('view-clothe', {
      pageTitle: data.clothesName,
      item: data,
      url: 'men-clothes',
      addToCard: 'add-cart/men-clothe',
    });
  });
};

exports.getWometClothes = (req, res) => {
  product.getWomenClotes(data => {
    res.render('view-clothes', {
      pageTitle: 'Women Clothes',
      item: data,
      url: 'women-clothes',
      addToCard: 'add-cart/women-clothe',
    });
  });
};

// dynamic router controlls
exports.getWometClothesProductId = (req, res) => {
  const productId = req.params.productId;
  product.getWomenClotesById(productId, data => {
    res.render('view-clothe', {
      pageTitle: data.clothesName,
      item: data,
      addToCard: 'add-cart/women-clothe',
    });
  });
};

exports.getBabyClothes = (req, res) => {
  product.getBabyClotes(data => {
    res.render('view-clothes', {
      pageTitle: 'Baby Clothes',
      item: data,
      url: 'baby-clothes',
      addToCard: 'add-cart/baby-clothe',
    });
  });
};

// dynamic router controlls
exports.getBabyClothesProductId = (req, res) => {
  const productId = req.params.productId;
  product.getBabyClotesById(productId, data => {
    res.render('view-clothe', {
      pageTitle: data.clothesName,
      item: data,
      addToCard: 'add-cart/baby-clothe',
    });
  });
};

exports.getContactUs = (req, res) => {
  res.render('contact-us', {
    pageTitle: 'Contact us',
  });
};
