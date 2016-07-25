const http = require('http');

const PORT=3333;
let visitors = 1;

const server = http.createServer((req, res) => {
  console.log(req.url);
  const html = `
    <h1>Hey There World!!!</h1>
    <p>You asked for the url "${req.url}"</p>
    <p>Vistors: ${visitors}</p>`;

  res.end(html);
  visitors ++;
});

server.listen(PORT);
