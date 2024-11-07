// routes/product.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product'); // Import the controller

// Define routes
router.get('/', productController.getALLProducts); // GET all products
router.get('/testing', productController.getALLProductsTesting); // Additional route for testing

module.exports = router; // Export the router
