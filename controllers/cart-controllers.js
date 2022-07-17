const Cart = require('../modules/Cart');
const product = require('../modules/Product');
const User = require('../modules/User');

exports.getShopDetails = async (req, res) => {
  try {
    const userRecord = await User.findById(req.session.user._id);

    const cardRecords = await Cart.find({ _id: userRecord.carts });

    let total = 0;

    cardRecords.forEach(items => {
      total += items.price;
    });

    res.render('cart-details', {
      pageTitle: 'Cart Details',
      productDetails: cardRecords,
      total,
      loggin: req.session.isLoggin,
      admin: req.session.admin,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.removeFromCartById = async (req, res) => {
  const { productId } = req.params;

  try {
    const userRecord = await User.findById(req.session.user._id);
    const cartRecord = await Cart.findByIdAndRemove(productId);

    userRecord.carts.pop(cartRecord._id);
    userRecord.save();

    res.redirect('/cart-details');
  } catch (error) {
    console.log(error);
  }
};

exports.addToCartMenClotheById = async (req, res) => {
  const { productId } = req.params;

  try {
    const productRecord = await product.findById(productId);

    const cart = new Cart({
      ProductId: productRecord._id,
      img: productRecord.img,
      imgAlt: productRecord.imgAlt,
      clothesName: productRecord.clothesName,
      price: productRecord.price,
    });

    const userRecord = await User.findById(req.session.user._id);

    userRecord.carts.push(cart._id);
    userRecord.save();

    req.flash('added-to-cart', `${cart.clothesName} is added to card`);

    cart.save();

    res.redirect('/men-clothes');
  } catch (error) {
    console.log(error);
  }
};

exports.addToCartwomenClotheById = async (req, res) => {
  const { productId } = req.params;

  try {
    const productRecord = await product.findById(productId);

    const cart = new Cart({
      ProductId: productRecord._id,
      img: productRecord.img,
      imgAlt: productRecord.imgAlt,
      clothesName: productRecord.clothesName,
      price: productRecord.price,
    });

    const userRecord = await User.findById(req.session.user._id);

    userRecord.carts.push(cart._id);
    userRecord.save();

    req.flash('added-to-cart', `${cart.clothesName} is added to card`);

    cart.save();

    res.redirect('/women-clothes');
  } catch (error) {
    console.log(error);
  }
};

exports.addToCartBabyClotheById = async (req, res) => {
  const { productId } = req.params;

  try {
    const productRecord = await product.findById(productId);

    const cart = new Cart({
      ProductId: productRecord._id,
      img: productRecord.img,
      imgAlt: productRecord.imgAlt,
      clothesName: productRecord.clothesName,
      price: productRecord.price,
    });

    const userRecord = await User.findById(req.session.user._id);

    userRecord.carts.push(cart._id);
    userRecord.save();

    req.flash('added-to-cart', `${cart.clothesName} is added to card`);

    cart.save();

    res.redirect('/baby-clothes');
  } catch (error) {
    console.log(error);
  }
};
