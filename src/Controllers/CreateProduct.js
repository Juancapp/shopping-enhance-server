const Product = require("../Models/Product");

const createProduct = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({
      message: `Server Error ${error}`,
      data: undefined,
      error: true,
    });
  }
};

module.exports =  createProduct ;
