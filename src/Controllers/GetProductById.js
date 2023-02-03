const Product = require("../Models/Product");

const getProductById = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.find({productId: productId});
    if (product && product.length > 0) {
      return res.status(200).json({
        message: 'Product found successfully',
        data: product,
        error: false,
      });
    }
    return res.status(404).json({
      message: `Product with id ${productId} not found`,
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
}

module.exports = getProductById;