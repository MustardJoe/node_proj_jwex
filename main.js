const port = 3000;
const http = require('http');
const httpStatusCodes = require('http-status-codes');
const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');

router.get('/', (req, res) => {
  console.log(req.url);
  res.writeHead(httpStatusCodes.OK, contentTypes.html);
  utils.getFile('views/index.html', res);
});

router.get('/courses.html', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.html);
  utils.getFile('views/courses.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes);
  res.end('Your data has posted (it actually has not posted, but anyway you his a ok route');
});

http.createServer(router.handle).listen(port);
/* eslint-disable-next-line no-console */
console.log(`Your server is up and running on port ${port}. Welcome to SkyNet.`);
