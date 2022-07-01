const path = require('path');

require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);

const multer = require('multer');

// routes
const routes = require('./routes/routes');
const userAccountRoutes = require('./routes/user-account-routers');
const cartRoutes = require('./routes/cart-routes');
const authRoutes = require('./routes/auth-routes');
const { get404Error } = require('./controllers/404');

const MONGODBCONNECCTION = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.nhstys8.mongodb.net/Feashon-Shop`;

const app = express();

const store = new MongoDBStore({
  uri: MONGODBCONNECCTION,
  collection: 'sessions',
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

const fileStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

app.use(
  multer({
    storage: fileStorage,
  }).single('img')
);

app.use(
  session({
    secret: 'my secret key',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(routes);
app.use(authRoutes);
app.use(userAccountRoutes);
app.use(cartRoutes);
app.use(get404Error);

mongoose
  .connect(MONGODBCONNECCTION)
  .then(() => {
    app.listen(8000, () => {
      console.log('http://localhost:8000/');
    });
  })
  .catch(err => console.log(err));
