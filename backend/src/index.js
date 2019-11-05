var express = require('express');
var bodyParser = require('body-parser');
let path = require('path');

var app = express();
var gotRoute = require('./routes/got');

app.use(bodyParser.json());
app.use(gotRoute);
app.use(express.static('public'))

// Configurations for headers and cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Handler for error 404
app.use((req, res) => {
    res.status(404).send('We think you are lost!')
})

//Handler for error 500
app.use((err, req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/500.html'));
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Server has started ${PORT}`));