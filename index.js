var express = require('express')
    , app = express();

app.get('/', function(request, response) {
    response.end('<!DOCTYPE html><html><head><meta charset="utf-8" /><title>TEST</title></head><body>ПРИВЕТ</body></html>');
});

app.listen(5000, function () {
    console.log('Node app is running on port 5000');
});


