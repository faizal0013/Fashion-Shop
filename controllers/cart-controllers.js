const Cart = require('../modules/Cart');
const product = require('../modules/Product');

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
    });
  });
};

exports.addToCartMenClotheById = (req, res) => {
  const { productId } = req.params;

  product
    .findById(productId)
    .then(data => {
      const cart = new Cart({
        Product_id: data._id,
        img: data.img,
        imgAlt: data.imgAlt,
        clothesName: data.clothesName,
        price: data.price,
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
        Product_id: data._id,
        img: data.img,
        imgAlt: data.imgAlt,
        clothesName: data.clothesName,
        price: data.price,
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
        Product_id: data._id,
        img: data.img,
        imgAlt: data.imgAlt,
        clothesName: data.clothesName,
        price: data.price,
      });
      cart.save();
      res.redirect('/baby-clothes');
    })
    .catch(err => console.log('addToCartBabyClotheById', err));
};
