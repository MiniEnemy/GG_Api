const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    // Get pagination parameters from the request
    let page = Math.max(1, Number(req.query.page)) || 1;
    let limit = Math.min(50, Math.max(10, Number(req.query.limit))) || 20;
    let skip = (page - 1) * limit;

    // Extract filter and sort parameters from the request
    const filters = { ...req.query };
    delete filters.page;
    delete filters.limit;
    delete filters.sort;

    const sortBy = req.query.sort || "createdAt";
    const sortOrder = req.query.order === "asc" ? 1 : -1;

    // Fetch products with filters, sorting, skip, and limit
    const products = await Product.find(filters)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);

    // Count total documents matching the filters
    const totalProducts = await Product.countDocuments(filters);
    const totalPages = Math.ceil(totalProducts / limit);

    res.json({
      products,
      pagination: {
        currentPage: page,
        totalPages,
        totalProducts,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

module.exports = {
  getProducts,
};