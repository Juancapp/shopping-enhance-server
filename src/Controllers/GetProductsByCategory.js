const Product = require("../Models/Product");

const getProductsByCategory = async (req, res) => {
  const productCategory = req.params.category;
  try {
    const products = await Product.find({category: productCategory});

    if (products && products.length > 0) {
      return res.status(200).json({
        message: "Products found successfully",
        data: products,
        error: false,
      });
    }

    return res.status(404).json({
      message: `There are not products with category`,
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error ${error}`,
      data: undefined,
      error: true,
    });
  }
};

module.exports = getProductsByCategory;