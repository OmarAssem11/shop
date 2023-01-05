const express = require("express");

const ds = require("../datasource/shops");

const router = express.Router();

router.get("/", (req, res) => res.json(ds.fetchShops(req.query.limit)));

module.exports = router;
