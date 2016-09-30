var http = require('http')
    , url = require('url');

var server = http.createServer(function (request, response) {
    if (request.method.toUpperCase() === 'GET' && url.parse(request.url).path === 'server') {
        response.writeHead(200);
        response.write(
            `<!DOTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <title>Test</title>
            </head>
            <body>
                <p>Привет</p>
            </body>
            </html>`
        );
        reponse.end();
    } else {
        response.writeHead(200);
        response.write(
            `<!DOTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <title>Test</title>
            </head>
            <body>
                <p>Пока</p>
            </body>
            </html>`
        );
        reponse.end();
    }
});

server.listen(80);