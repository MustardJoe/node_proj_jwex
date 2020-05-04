// const port = 3000;
// const http = require('http');
// const httpStatusCodes = require('http-status-codes');
// const router = require('./routes');
// const fs = require('fs');

// const plainTextContentType = {
//   'Content-Type': 'text/plain'
// };
// const htmlContentType = {
//   'Content-Type': 'text/html'
// };
// const customReadFile = (file, res) => {
//   fs.readFile(`./${file}`, (error, data) => {
//     if(error) {
//       /* eslint-disable-next-line no-console */
//       console.log('This file has errors because it is sad');
//     }
//     res.end(data);
//   });
// };

// router.get('/', (req, res) => {
//   console.log('main.js, in router.get', req.body);
//   res.writeHead(httpStatusCodes.OK, htmlContentType);
//   customReadFile('views/index.html', res);
// });

// router.get('/extra', (req, res) => {
//   res.writeHead(httpStatusCodes.OK, plainTextContentType);
//   res.end('<h1>EXTRA EXTRA READ ALL ABOUT IT!!</h1>');
// });

// http.createServer(router.handle).listen(port);

// /* eslint-disable-next-line no-console */
// console.log(`The server has started and is listening on port ${port}. Welcome to SkyNet.`);

const port = 3000,
  http = require('http'),
  httpStatusCodes = require('http-status-codes'),
  router = require('./routes'),
  fs = require('fs'),
  plainTextContentType = {
    'Content-Type': 'text/plain'
  },
  htmlContentType = {
    'Content-Type': 'text/html'
  },
  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
      if(errors) {
        /* eslint-disable-next-line no-console */
        console.log('Error reading the file...');
      }
      res.end(data);
    });
  };

router.get('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end('INDEX');
});
router.get('/index.html', (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile('views/index.html', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end('POSTED');
});

http.createServer(router.handle).listen(3000);
/* eslint-disable-next-line no-console */
console.log(`The server is listening on port number:
 ${port}`);

