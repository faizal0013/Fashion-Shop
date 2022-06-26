const path = require('path');

require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/routes');
const userAccountRoutes = require('./routes/user-account-routers');
const cartRoutes = require('./routes/cart-routes');
const { get404Error } = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);
app.use(userAccountRoutes);
app.use(cartRoutes);
app.use(get404Error);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.nhstys8.mongodb.net/Feashon-Shop?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8000, () => {
      console.log('http://localhost:8000/');
    });
  })
  .catch(err => console.log(err));
