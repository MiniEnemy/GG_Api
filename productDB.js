require ("dotenv").config();
const connectDB= require("./db/connect");

const product = require("./model/product");

const ProductJson = require("./products.json");

const start= async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await product.create(ProductJson);
        console.log("MongoDB Connected...");
}catch (error) {
    console.log(Error);
}
};

start ();