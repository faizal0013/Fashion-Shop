const { Schema, model } = require('mongoose');

const User = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  email: {
    type: Schema.Types.String,
    require: true,
  },
  'user-name': {
    type: Schema.Types.String,
    require: true,
  },
  'user-password': {
    type: Schema.Types.String,
    require: true,
  },
  admin: {
    type: Schema.Types.String,
    require: true,
  },
});

module.exports = model('User', User);
