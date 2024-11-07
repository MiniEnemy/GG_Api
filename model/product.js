// model/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    featured: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    company: { type: String },
    category: { type: String },
    stock: { type: Number, default: 0 },
    image: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
