// Create web server 
// Create a route that accepts a POST request to /comments
// It should send back the data associated with the request
// Use the express.json() middleware to parse JSON data
// Use the express.urlencoded() middleware to parse form data

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/comments', (req, res) => {
    res.send(req.body);
});

app.listen(3000);
