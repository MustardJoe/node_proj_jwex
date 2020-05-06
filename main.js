const port = 3000;
const http = require('http');
const httpStatusCodes = require('http-status-codes');
const router = require('./router');
const contentTypes = require('./contentTypes');
const utils = require('./utils');

router.get('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.html);
  utils.getFile('views/index.html', res);
});

router.get('/courses.html', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.html);
  utils.getFile('views/courses.html', res);
});

router.get('/contact.html', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.html);
  utils.getFile('views/contact.html', res);
});

router.get('/jonappetit.css', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.css);
  utils.getFile('public/css/jonappetit.css', res);
});

router.get('/pizzaburger.jpg', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.jpg);
  utils.getFile('public/assets/pizzaburger.jpg', res);
});

router.get('/godzilla.jpg', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.jpg);
  utils.getFile('public/assets/godzilla.jpg', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, contentTypes.text);
  res.end('Your data has posted (it actually has not posted, but anyway you hit a ok route');
});

http.createServer(router.handle).listen(port);
/* eslint-disable-next-line no-console */
console.log(`The Recipe Blaster server is up and running on port ${port}. Welcome to SkyNet.`);
