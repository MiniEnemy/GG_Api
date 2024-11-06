const express = require('express');
const router = express.Router();

const {getALLProducts,getALLProductsTesting} = require("../controllers/product");

router.route("/").get(getALLProducts);
router.route("/testing").get(getALLProductsTesting);


module.exports = router;