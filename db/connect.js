const mongoose = require('mongoose');

const uri = "mongodb+srv://GamerGaun:gamer=007@ggapi.hky1u.mongodb.net/?retryWrites=true&w=majority&appName=GGapi";

const connectDB = () => {
    console.log('MongoDB Connected...');
    return mongoose.connect(uri, {
    });
};

module.exports = connectDB;
