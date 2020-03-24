const express = require('express');
const app = express();

app.use(express.static('client/dist/'));

app.listen('1888', () => {
    console.log('listening on port 1888')
})

app.get('/', (req, res) => {
    res.end();
})