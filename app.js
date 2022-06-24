const path = require('path');

const express = require('express');

const routes = require('./routes/routes');
const cartRoutes = require('./routes/cart-routes');
const { get404Error } = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);
app.use(cartRoutes);
app.use(get404Error);

app.listen(8000, () => {
  console.log('http://localhost:8000/');
});
