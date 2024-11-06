const product = require("../model/product");

const getALLProducts = async (req, res) => {
    // Get page and limit from the query parameters
    let page = Number(req.query.page) || 1;  // Default to page 1 if not provided
    let limit = Number(req.query.limit) || 7;  // Default to 3 items per page if not provided
    let skip = (page - 1) * limit;  // Calculate the number of items to skip based on page

    // Remove pagination params from req.query before passing to find and countDocuments
    const filterQuery = { ...req.query };
    delete filterQuery.page;
    delete filterQuery.limit;

    try {
        // Query the products with pagination
        const MyProducts = await product.find(filterQuery)  // Pass only the filter query
                                    .skip(skip)  // Skip items based on page
                                    .limit(limit);  // Limit the number of items per page

        // Get the total number of products (for pagination info)
        const nbHits = await product.countDocuments(filterQuery);  // Count total matching items in the DB

        // Return the paginated data and the total count
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
