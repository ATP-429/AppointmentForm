const express = require('express');
const path = require('path');
const port = 3000;

const {MongoClient, ObjectID} = require('mongodb');
var client;
try {
    client = new MongoClient("mongodb://localhost:27017/");
}
catch(e) {
    console.log(e);
}

app = express();
app.use(express.json()); //Use json for parsing POST requests
app.use(express.static(path.join(__dirname, 'public'))); //Serve static files in 'public' folder

app.post('/request', async (req, res) => {
    console.log(req.body);
    client.db('appointments').collection('details').insertOne({name: req.body.name, email: req.body.email, phone: req.body.phone, date: req.body.date}).then(() => res.end(JSON.stringify({success: true})));
});

app.get('/', async (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
});

const server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
