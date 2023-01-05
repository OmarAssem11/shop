const uuidV4 = require("uuid").v4;

const cart = [];

const cartDS = {
  addToCart: (cartItem) => {
    cart.push(cartItem);
    return uuidV4();
  },
};

module.exports = cartDS;
