const http = require('http');
const httpStatus = require('http-status-codes');

const port = 3000;
const app = http.createServer();

const routesMap = {
  '/info': '<h1>Welcome to info</h1>',
  '/contact': '<h1>Unwelcome to contact me</h1>',
  '/about': '<h1>Now you learn AbOUT me (i aint commie-nadian</h1>',
  '/hell': '<h1>HELL!!!! YOU ARE DAMNED I GUESS FOR COMING TO HERE</h1>',
  '/error': '<h1>An Error Has Occured</h1>',
  '/': '<h1>we will see if this works: its home!!!</h1>',
};

app.on('request', (req, res) => {
  /* eslint-disable-next-line no-console */
  console.log('received an incoming request');
  /* eslint-disable-next-line no-console */
  console.log('method: ', req.method, 'url: ', req.url, 'headers', req.headers);
  
  res.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html'
  });

  let responseMessage = '';
  if(routesMap[req.url]) {
    responseMessage = routesMap[req.url];
  }
  else {
    responseMessage = routesMap['/error'];
  }
  
  
  res.write(responseMessage);

  res.end();
  /* eslint-disable-next-line no-console */
  console.log(`Sent response message : ${responseMessage}`);
});

app.listen(port);
/* eslint-disable-next-line no-console */
console.log(`The server has started and is listening on port ${port}. Welcome to SkyNet.`);
