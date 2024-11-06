const mongoose = require('mongoose');
const connectDB = () => {
    console.log('MongoDB Connected...');
    return mongoose.connect(process.env.MONGODB_URL, {
    });
};

module.exports = connectDB;
