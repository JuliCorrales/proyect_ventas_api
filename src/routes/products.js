const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Obtener todos los usuarios
router.get('/products', productController.getAllProducts);


module.exports = router;