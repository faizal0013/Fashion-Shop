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
    admin: req.session.admin,
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
  try {
    const records = await products.find({ tag: 'men-clothes' });
    const addedToCartMessage = req.flash('added-to-cart');

    res.render('view-clothes', {
      pageTitle: 'Men Clothes',
      item: records,
      url: 'men-clothes',
      addToCard: 'add-cart/men-clothe',
      loggin: req.session.isLoggin,
      admin: req.session.admin,
      addedToCartMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

// dynamic router controlls
exports.getManClothesProductId = async (req, res) => {
  const productId = req.params.productId;

  try {
    const record = await products.findById(productId);

    res.render('view-clothe', {
      pageTitle: record.clothesName,
      item: record,
      url: 'men-clothes',
      addToCard: 'add-cart/men-clothe',
      backPage: '/men-clothes',
      loggin: req.session.isLoggin,
      admin: req.session.admin,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getWometClothes = async (req, res) => {
  try {
    const records = await products.find({ tag: 'women-clothes' });
    const addedToCartMessage = req.flash('added-to-cart');

    res.render('view-clothes', {
      pageTitle: 'Women Clothes',
      item: records,
      url: 'women-clothes',
      addToCard: 'add-cart/women-clothe',
      loggin: req.session.isLoggin,
      admin: req.session.admin,
      addedToCartMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

// dynamic router controlls
exports.getWometClothesProductId = async (req, res) => {
  const productId = req.params.productId;

  try {
    const record = await products.findById(productId);

    res.render('view-clothe', {
      pageTitle: record.clothesName,
      item: record,
      addToCard: 'add-cart/women-clothe',
      backPage: '/women-clothes',
      loggin: req.session.isLoggin,
      admin: req.session.admin,
    });
  } catch (error) {}
};

exports.getBabyClothes = async (req, res) => {
  try {
    const records = await products.find({ tag: 'baby-clothes' });
    const addedToCartMessage = req.flash('added-to-cart');

    res.render('view-clothes', {
      pageTitle: 'Baby Clothes',
      item: records,
      url: 'baby-clothes',
      addToCard: 'add-cart/baby-clothe',
      loggin: req.session.isLoggin,
      admin: req.session.admin,
      addedToCartMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

// dynamic router controlls
exports.getBabyClothesProductId = async (req, res) => {
  const productId = req.params.productId;

  try {
    const record = await products.findById(productId);

    res.render('view-clothe', {
      pageTitle: record.clothesName,
      item: record,
      addToCard: 'add-cart/baby-clothe',
      backPage: '/baby-clothes',
      loggin: req.session.isLoggin,
      admin: req.session.admin,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getContactUs = (req, res) => {
  res.render('contact-us', {
    pageTitle: 'Contact us',
    loggin: req.session.isLoggin,
    admin: req.session.admin,
  });
};
