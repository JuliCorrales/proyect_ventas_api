const Product = require('../models/productModel');

// Obtener todos los productos
const productInstance = new Product();

const getAllProducts = async (req, res) => {
    const products = await productInstance.getAllProducts();
    res.send(products);
};

module.exports = {getAllProducts};