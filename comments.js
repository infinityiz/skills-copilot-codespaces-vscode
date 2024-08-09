//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Create comments
const comments = [];
let id = 0;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = ++id;
    comments.push(comment);
    res.status(201).json(comment);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});