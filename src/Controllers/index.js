const createProduct = require('./CreateProduct');
const getAllProducts = require('./GetProducts');
const getProductById = require('./GetProductById');
const getProductsByCategory = require('./GetProductsByCategory');

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  getProductsByCategory
}