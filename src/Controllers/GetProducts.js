const Product = require("../Models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products && products.length > 0) {
      return res.status(200).json({
        message: "Products found successfully",
        data: products,
        error: false,
      });
    }
    return res.status(404).json({
      message: "Products not found",
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server Error ${error}`,
      data: undefined,
      error: true,
    });
  }
};


module.exports = getAllProducts;
