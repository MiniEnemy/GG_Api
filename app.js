// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require("./db/connect");
const productsRouter = require("./routes/product"); // Import the products router

const app = express();
const port = process.env.PORT || 5000;

// Set up CORS options (allow only specific origin)
const corsOptions = {
  origin: 'http://localhost:5173', // Frontend URL (replace with your frontend URL)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS with specific options
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("The server is Online");
});

// API route for products
app.use("/products", productsRouter); // Correct path for the products router

const start = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

start();
