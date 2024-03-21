const { json } = require('express');
const Product = require('../models/productModel');

// Obtener todos los productos
const productInstance = new Product();

function getAllProducts(req, res) {
    productInstance.getAllProducts(req, res);
}

module.exports = {getAllProducts};