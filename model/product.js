const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  company: {
    type: String,
    required: [true, "Company is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  stock: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: [true, "Image URL is required"]
  }
});

module.exports = mongoose.model('Product', productSchema);
