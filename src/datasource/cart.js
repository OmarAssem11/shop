const uuidV4 = require("uuid").v4;

let cart = [];

const cartDS = {
  addToCart: (cartItem) => {
    const id = uuidV4();
    cartItem.id = id;
    cart.push(cartItem);
    return id;
  },
  fetchCartItems: () => cart,
  fetchCartItemById: (id) => cart.find((cartItem) => cartItem.id == id),
  deleteCartItemById: (id) =>
    (cart = cart.filter((cartItem) => cartItem.id != id)),
};

module.exports = cartDS;
