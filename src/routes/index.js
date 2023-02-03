const express = require("express");
const productsControllers = require("../Controllers/productsControllers.js");

const router = express.Router();

router
  .get("/", productsControllers.getAllProducts)
  .get("/category", productsControllers.getProductsByCategory)
  .get("/product/:productId", productsControllers.getProductById)
  .post("/", productsControllers.createProduct);

module.exports = router;
