const http = require('http');
const httpStatus = require('http-status-codes');

const port = 3000;
const app = http.createServer((req, res) => {
  /* eslint-disable-next-line no-console */
  console.log('received an incoming request');
  res.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html'
  });
  let responseMessage = `<h1>Hello dumb world, (from smart world)</h1>
  <p>all your butts are belong to us.</p>
  `;
  res.write(responseMessage);
  res.end();
  /* eslint-disable-next-line no-console */
  console.log(`Sent response message : ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port ${port}. Welcome to SkyNet.`)