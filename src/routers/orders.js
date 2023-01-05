const express = require("express");
const ordersDS = require("../datasource/orders");
const cartDS = require("../datasource/cart");

const router = express.Router();

router.post("/", (req, res) => {
  const id = ordersDS.createOrder(req.body);
  cartDS.clearCart();
  res.status(201).location(`orders/${id}`).send();
});

module.exports = router;
