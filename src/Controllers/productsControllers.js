const Product = require("../Models/Product");

const createProduct = async (req, res) => {
  try {
    const productFound = await Product.find({ productId: req.body.productId });
    if (productFound.length !== 0) {
      return res.status(400).json({
        message: `Product width productId ${req.body.productId} already exists`,
        data: undefined,
        error: false,
      });
    } else {
      const newProduct = new Product({
        productId: req.body.productId,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        rating: req.body.rating,
      });

      const result = await newProduct.save();

      return res.status(201).json({
        message: "Product created successfully",
        data: result,
        error: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: `Server Error ${error}`,
      data: undefined,
      error: true,
    });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.find({ productId: productId });
    if (product && product.length > 0) {
      return res.status(200).json({
        message: "Product found successfully",
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
};

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

const getProductsByCategory = async (req, res) => {
  const productCategory = req.params.category;
  try {
    const products = await Product.find({ category: productCategory });

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

const getLastProduct = async (req, res) => {
  try {
    const products = await Product.find();
    const productsSorted = products.sort((a, b) => {
      return b.productId - a.productId
    })
    const firstProduct = productsSorted[0];
    return res.status(200).json({
      message: "Product found successfully",
      data: firstProduct,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error ${error}`,
      data: undefined,
      error: true,
    });
  }
}

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
  getProductsByCategory,
  getLastProduct
};
