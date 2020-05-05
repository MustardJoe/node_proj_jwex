const port = 3000;
const http = require('http');
const httpStatusCodes = require('http-status-codes');
const router = require('./routes');
const fs = require('fs');

const plainTextContentType = {
  'Content-Type': 'text/plain'
};

const htmlContentType = {
  'Content-Type': 'text/html'
};

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if(error) {
      /* eslint-disable-next-line no-console */
      console.log('Error Reading File: ', error);
    }
    res.end(data);
  });
};

router.get('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end('INDEX, the is all that is here');
});

router.get('/index.html', (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile('views/index.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end('Your data has posted (it actually has not posted, but anyway you his a ok route');
});

http.createServer(router.handle).listen(port);
/* eslint-disable-next-line no-console */
console.log(`Your server is up and running on port ${port}. Welcome to SkyNet.`);
