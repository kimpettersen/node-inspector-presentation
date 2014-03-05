var http = require('http'),
    url = require('url');


http.createServer(function (req, res) {
    //Parses the URL and returns a JSON of the passed parameters
    var parsedURL = url.parse(req.url, true);
    var query = parsedURL.query;
    debugger;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(query));
}).listen(9001);
