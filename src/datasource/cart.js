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
  clearCart: () => (cart = []),
  updateCartItem: (id, patchCartItem) => {
    const existingCartItem = cart.find((cartItem) => cartItem.id == id);
    if (existingCartItem) {
      const itemIndex = cart.findIndex((cartItem) => cartItem.id == id);
      const updatedCartItem = { ...existingCartItem, ...patchCartItem };
      cart[itemIndex] = updatedCartItem;
      return updatedCartItem;
    }
    return undefined;
  },
};

module.exports = cartDS;
