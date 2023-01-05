const express = require("express");
const ds = require("../datasource/datasource");

const router = express.Router();

router.get("/", (req, res) => {
  const products = ds.fetchProducts();
  console.log(products);
  res.status(200).json(products);
});

module.exports = router;
