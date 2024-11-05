const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {  // Added 'req' and 'res' parameters
    res.send("The server is Online");
});

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`${port} yes it's Live`);
        });
    } catch (error) {
        console.log("Error:", error); // Optional: Log the error itself for more details
    }
};

start();
