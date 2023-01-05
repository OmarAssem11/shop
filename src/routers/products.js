const express = require("express");
const ds = require("../datasource/products");

const router = express.Router();

router.get("/", (req, res) => {
  const products = ds.fetchProducts();
  console.log(products);
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = ds.fetchProductsById(productId);
  if (product != undefined) res.status(200).json(product);
  else res.status(404).send();
});

module.exports = router;
