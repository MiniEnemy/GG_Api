require('dotenv').config();


const express = require('express');
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 5000;

const products_routes = require("../API/routes/product");

app.get("/", (req, res) => {  // Added 'req' and 'res' parameters
    res.send("The server is Online");
});
// top set router

app.use("/api/products",products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);  // Connect to MongoDB
        app.listen(port, () => {
            console.log(`${port} yes it's Live`);
        });
    } catch (error) {
        console.log("Error:", error); // Optional: Log the error itself for more details
    }
};

start();
