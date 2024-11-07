const product = require("../model/product");

const getALLProducts = async (req, res) => {
    let page = Number(req.query.page) || 1;  // Default to page 1 if not provided
    let limit = Number(req.query.limit) || 10;  // Default to 10 items per page if not provided

    // Ensure limit doesn't exceed 10
    if (limit > 10) {
        limit = 10;
    }

    let skip = (page - 1) * limit;

    const filterQuery = { ...req.query };
    delete filterQuery.page;
    delete filterQuery.limit;

    try {
        const MyProducts = await product.find(filterQuery).skip(skip).limit(limit);
        const nbHits = await product.countDocuments(filterQuery);
        res.status(200).json({ MyProducts, nbHits });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

const getALLProductsTesting = async (req, res) => {
    try {
        const myData = await product.find(req.query);
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

module.exports = { getALLProducts, getALLProductsTesting };
