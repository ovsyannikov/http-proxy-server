var express = require('express');

var server = express();

server.get('/', function (request, response) {
    response.end('<!DOCTYPE html><html><head><meta charset="utf-8" /><title>TEST</title></head><body>ПРИВЕТ</body></html>');
});

server.listen(process.env.PORT || 5000, function () {
    console.log('Node server is running on port 5000');
});