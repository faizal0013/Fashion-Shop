const products = require('../modules/Product');

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
    loggin: req.session.isLoggin,
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
    loggin: req.session.isLoggin,
    totalPrice,
  });
};

exports.getManClothes = async (req, res) => {
  await products
    .find({ tag: 'men-clothe' })
    .then(data => {
      res.render('view-clothes', {
        pageTitle: 'Men Clothes',
        item: data,
        url: 'men-clothes',
        addToCard: 'add-cart/men-clothe',
        loggin: req.session.isLoggin,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// dynamic router controlls
exports.getManClothesProductId = (req, res) => {
  const productId = req.params.productId;
  products.findById(productId).then(data => {
    res.render('view-clothe', {
      pageTitle: data.clothesName,
      item: data,
      url: 'men-clothes',
      addToCard: 'add-cart/men-clothe',
      backPage: '/men-clothes',
      loggin: req.session.isLoggin,
    });
  });
};

exports.getWometClothes = async (req, res) => {
  await products
    .find({ tag: 'women-clothe' })
    .then(data => {
      res.render('view-clothes', {
        pageTitle: 'Women Clothes',
        item: data,
        url: 'women-clothes',
        addToCard: 'add-cart/women-clothe',
        loggin: req.session.isLoggin,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// dynamic router controlls
exports.getWometClothesProductId = (req, res) => {
  const productId = req.params.productId;
  products.findById(productId).then(data => {
    res.render('view-clothe', {
      pageTitle: data.clothesName,
      item: data,
      addToCard: 'add-cart/women-clothe',
      backPage: '/women-clothes',
      loggin: req.session.isLoggin,
    });
  });
};

exports.getBabyClothes = async (req, res) => {
  await products
    .find({ tag: 'baby-clothe' })
    .then(data => {
      res.render('view-clothes', {
        pageTitle: 'Baby Clothes',
        item: data,
        url: 'baby-clothes',
        addToCard: 'add-cart/baby-clothe',
        loggin: req.session.isLoggin,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// dynamic router controlls
exports.getBabyClothesProductId = (req, res) => {
  const productId = req.params.productId;
  products.findById(productId).then(data => {
    res.render('view-clothe', {
      pageTitle: data.clothesName,
      item: data,
      addToCard: 'add-cart/baby-clothe',
      backPage: '/baby-clothes',
      loggin: req.session.isLoggin,
    });
  });
};

exports.getContactUs = (req, res) => {
  res.render('contact-us', {
    pageTitle: 'Contact us',
    loggin: req.session.isLoggin,
  });
};
