const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../modals/Product");

// get all
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//create
router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
