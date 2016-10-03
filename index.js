var express = require('express')
    , httpProxy = require('http-proxy');

var server = express()
    , proxy = httpProxy.createProxyServer({});

httpProxy.createProxyServer({target: 'http://api.typings.org/'}).listen(process.env.PORT || 5000);
/*
server.get('/', function (request, response) {
    proxy.web(req, res, {target: 'http://.com'});
});

server.listen(process.env.PORT || 5000, function () {
    console.log('Node server is running on port 5000');
});

*/