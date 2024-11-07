require('dotenv').config();

const express = require('express');
const cors = require('cors');  // Import the CORS package
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 5000;

const products_routes = require("./routes/product");

// Set up CORS options (allow only specific origin)
const corsOptions = {
    origin: 'http://localhost:5173',  // Frontend URL (replace with your frontend URL)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS with specific options
app.use(cors(corsOptions));

// Root route
app.get("/", (req, res) => {
    res.send("The server is Online");
});

// API route for products
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);  // Connect to MongoDB
        app.listen(port, () => {
            console.log(`${port} yes it's Live`);
        });
    } catch (error) {
        console.log("Error:", error);  
    }
};

start();
