const express = require("express");
const ds = require("../datasource/cart");

const router = express.Router();

router.post("/", (req, res) => {
  const cartItem = req.body;
  const id = ds.addToCart(cartItem);
  res.status(201).location(`/cart/${id}`).send();
});

router.get("/", (req, res) => res.status(200).json(ds.fetchCartItems()));

router.get("/:id", (req, res) => {
  const cartItem = ds.fetchCartItemById(req.params.id);
  if (cartItem) res.status(200).json(cartItem);
  else res.status(404).send();
});

router.delete("/:id", (req, res) => {
  ds.deleteCartItemById(req.params.id);
  res.send();
});

router.delete("/", (req, res) => {
  ds.clearCart();
  res.send();
});

router.patch("/:id", (req, res) => {
  const updatedCartItem = ds.updateCartItem(req.params.id, req.body);
  if (updatedCartItem) res.json(updatedCartItem);
  else res.status(404).send();
});

module.exports = router;
