const getALLProducts = async (req, res) => {
    res.status(200).json({ msg: "The product receiving is available" });
};

const getALLProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "The product receiving is available in testing mode" });
};

module.exports = { getALLProducts, getALLProductsTesting };
