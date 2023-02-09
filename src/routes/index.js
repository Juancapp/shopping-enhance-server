const express = require("express");
const productsControllers = require("../Controllers/productsControllers.js");

const router = express.Router();

router
  .get("/", productsControllers.getAllProducts)
  .get("/category/:category", productsControllers.getProductsByCategory)
  .get("/:productId", productsControllers.getProductById)
  .get("/last-product", productsControllers.getLastProduct)
  .post("/", productsControllers.createProduct);

module.exports = router;
