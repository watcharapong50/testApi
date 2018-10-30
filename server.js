const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

const port = 80;
const db = require('./server/config/db');

app.use(express.static(path.join(__dirname, 'dist/APP3')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', require('./server/api/user.js'));
app.use('/api/status', require('./server/api/status.js'));
app.use('/api/eleMeter', require('./server/api/eleMeter.js'));


app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/APP3/index.html'));
});

io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });

});

server.listen(port, function () {
    console.log("On run in port : " + port);
});