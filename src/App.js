const express = require("express");
const cors = require("cors");

const db = require("./Database");
const controllers = require("./Controllers");
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server working on port ${process.env.PORT}`);
  db();
});

app.get("/products", controllers.getAllProducts);

app.get("/products/:category", controllers.getProductsByCategory);

app.get("/product/:productId", controllers.getProductById);

app.post("/products", controllers.createProduct);

module.exports = app;
