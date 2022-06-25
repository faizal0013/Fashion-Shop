const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  tag: {
    type: Schema.Types.String,
    require: true,
  },
  img: {
    type: Schema.Types.String,
    required: true,
  },
  imgAlt: {
    type: Schema.Types.String,
    required: true,
  },
  clothesName: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
});

module.exports = model('Product', ProductSchema);
