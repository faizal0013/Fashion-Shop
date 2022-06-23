const fs = require('fs');
const path = require('path');

const readFileOfMen = cd => {
  fs.readFile(path.join(__dirname, '../', 'data', 'man-clothes.json'), (err, data) => {
    if (data.length === 0) return cd([]);
    cd(JSON.parse(data));
  });
};

const readFileOfWomen = cd => {
  fs.readFile(path.join(__dirname, '../', 'data', 'woman-clothes.json'), (err, data) => {
    if (data.length === 0) return cd([]);
    cd(JSON.parse(data));
  });
};

const readFileOfBaby = cd => {
  fs.readFile(path.join(__dirname, '../', 'data', 'baby-clothes.json'), (err, data) => {
    if (data.length === 0) return cd([]);
    cd(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor() {}

  getMenClotes(cd) {
    readFileOfMen(data => {
      cd(data);
    });
  }

  getMenClotesById(_id, cd) {
    readFileOfMen(data => {
      cd(data.find(item => item._id === _id));
    });
  }

  getWomenClotes(cd) {
    readFileOfWomen(data => {
      cd(data);
    });
  }

  getWomenClotesById(_id, cd) {
    readFileOfWomen(data => {
      cd(data.find(item => item._id === _id));
    });
  }

  getBabyClotes(cd) {
    readFileOfBaby(data => {
      cd(data);
    });
  }

  getBabyClotesById(_id, cd) {
    readFileOfBaby(data => {
      cd(data.find(item => item._id === _id));
    });
  }
};
