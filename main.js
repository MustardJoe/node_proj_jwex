const port = 3000,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  app = http.createServer((req, res) => {
    console.log('received an incoming request');
    res.writeHead(httpStatus.OK, {
      'Content-Type': 'text/html'
    });
    let responseMessage = `<h1>Hello dumb world, (from smart world)</h1>
    <p>all your butts are belong to us.</p>
    `;
    res.write(responseMessage);
    res.end();
    console.log(`Sent response message : ${responseMessage}`);
  })

  app.listen(port);
  console.log(`The server has started and is listening on port ${port}. Welcome to SkyNet.`)