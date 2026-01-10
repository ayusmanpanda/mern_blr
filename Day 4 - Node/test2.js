const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js HTML Response</title>
    </head>
    <body>
        <h1>Hello from Node.js!</h1>
        <p>This is an HTML page served by a Node.js server.</p>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});