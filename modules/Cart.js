const fs = require('fs');
const path = require('path');

const readCartDetailsFile = async cd => {
  await fs.readFile(path.join(__dirname, '../', 'data', 'cart-details.json'), (err, data) => {
    cd(JSON.parse(data));
  });
};

module.exports = class Cart {
  constructor() {}

  addToCart(data) {}

  getCartDetails(cd) {
    readCartDetailsFile(cd);
  }

  getTotal(cd) {
    readCartDetailsFile(item => {
      let total = 0;
      item.forEach(data => {
        total += Number(data.price);
      });
      cd(total);
    });
  }
};
