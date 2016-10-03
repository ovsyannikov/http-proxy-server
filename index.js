var express = require('express');

var server = express.createServer();

server.get('/', function (request, response) {
    response.end('<!DOCTYPE html><html><head><meta charset="utf-8" /><title>TEST</title></head><body>ПРИВЕТ</body></html>');
});

server.listen(process.env.PORT || 80, function () {
    console.log('Node server is running on port 5000');
});