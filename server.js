const express = require('express');
const path = require('path');
const port = 3000;

app = express();
app.use(express.json()); //Use json for parsing POST requests
app.use(express.static(path.join(__dirname, 'public'))); //Serve static files in 'public' folder

app.post('/request', async (req, res) => {

    res.end(JSON.stringify({success: true}));
});

app.get('/', async (req, res) => {
    res.sendFile('public/index.html', {root: __dirname});
});

const server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
