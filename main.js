const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('q');
});

app.post('/fork', (req, res) => {
    try {
        res.send('Fork success');
    } catch (error) {
        res.status(300).send('Error: ' + error.message);
    }
});

app.post('/pull-request', (req, res) => {
    try {
        res.status(200).send('Success');
    } catch (error) {
        res.status(300).send('--error create: ' + error.message);
    }
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = server;