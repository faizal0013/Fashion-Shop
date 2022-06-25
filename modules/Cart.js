const { Schema, model } = require('mongoose');

const CartSchema = new Schema({
  ProductId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  img: {
    type: Schema.Types.String,
    require: true,
  },
  imgAlt: {
    type: Schema.Types.String,
    require: true,
  },
  clothesName: {
    type: Schema.Types.String,
    require: true,
  },
  price: {
    type: Schema.Types.Number,
    require: true,
  },
});

module.exports = model('Cart', CartSchema);
