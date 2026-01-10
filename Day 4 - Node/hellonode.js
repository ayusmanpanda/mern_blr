var v_http = require('http');

v_http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8989);    

console.log('Server running at http://localhost:8989/');