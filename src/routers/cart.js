const express = require("express");
const ds = require("../datasource/cart");

const router = express.Router();

router.post("/", (req, res) => {
  const cartItem = req.body;
  const id = ds.addToCart(cartItem);
  res.status(201).location(`/cart/${id}`).send();
});

module.exports = router;
