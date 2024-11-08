const Product = require('../model/product');

// Get all products
const getALLProducts = async (req, res) => {
  try {
    const products = await Product.find();
    
    // Map each product to replace `_id` with `id`
    const formattedProducts = products.map((product) => ({
      ...product.toObject(),  // Convert to plain object
      id: product._id,        // Add `id` as a replacement for `_id`
      _id: undefined,         // Remove `_id` field
    }));
    
    res.json({ MyProducts: formattedProducts });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    const formattedProduct = {
      ...product.toObject(),
      id: product._id,
      _id: undefined,
    };

    res.json(formattedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product by ID' });
  }
};

module.exports = {
  getALLProducts,
  getProductById,
};
