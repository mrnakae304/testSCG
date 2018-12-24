const http = require('http');
const url = require('url');
const view = require('./view-controller');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(view.controller[`${q.func}`](q.length));
}).listen(3000);
