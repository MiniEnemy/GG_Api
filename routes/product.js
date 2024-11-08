const express = require('express');
const router = express.Router();
const productController = require('../controllers/product'); // Import the controller

// Route to get all products
router.get('/', productController.getALLProducts);

// Route to get a product by its MongoDB ObjectId
router.get('/:id', productController.getProductById);

module.exports = router;
