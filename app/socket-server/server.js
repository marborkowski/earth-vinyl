"use strict";
// http://www.w3resource.com/node.js/nodejs-console-logging.php
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

console.time('Total time');
server.listen(8181);

app.get('/', function (req, res) {
    console.time('Serving HTML output');
    res.sendFile(__dirname + '/html/index.html');
    console.timeEnd('Serving HTML output');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

console.timeEnd('Total time');
