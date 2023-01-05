const uuidV4 = require("uuid").v4;

const orders = [];

const ordersDS = {
  createOrder: (order) => {
    order.id = uuidV4();
    orders.push(order);
    return order.id;
  },
};

module.exports = ordersDS;
