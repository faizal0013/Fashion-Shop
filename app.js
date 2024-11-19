const path = require('path');

require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const flash = require('connect-flash');

const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);

const multer = require('multer');

// routes require
const routes = require('./routes/routes');
const userAccountRoutes = require('./routes/user-account-routers');
const cartRoutes = require('./routes/cart-routes');
const authRoutes = require('./routes/auth-routes');
const { get404Error } = require('./controllers/404');

// mongodb connection
const MONGODBCONNECTION = process.env.MONGO_URL;

const app = express();

// storeing  session on mongodb
const store = new MongoDBStore({
  uri: MONGODBCONNECTION,
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

app.use(flash());

app.use(routes);
app.use(authRoutes);
app.use(userAccountRoutes);
app.use(cartRoutes);
app.use(get404Error);

mongoose
  .connect(MONGODBCONNECTION)
  .then(() => {
    app.listen(8000, () => {
      console.log('http://localhost:8000/');
    });
  })
  .catch(err => console.log(err));
