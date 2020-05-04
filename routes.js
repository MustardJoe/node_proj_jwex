const httpStatus = require('http-status-codes');
const htmlContentType = {
  'Content-Type': 'text/html'
};


const routes = {
  'GET': {
    '/info': (req, res) => {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/plain'
      })
      res.end('Welcome to the INFO page');
    }
  },
  'POST': {}
};

exports.handle = (req, res) => {
  try {
    if(routes[req.method][req.url]) {
      routes[req.methos][req.url](req, res);
    }
    else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end('<h1>404 IDIOT!!! STUPID LOOSER THAT FILE DOESN"T EXIST</h1>');
    }
  }
  catch(ex) {
    /* eslint-disable-next-line no-console */
    console.log('ERROR: ', ex);
  }
};

exports.get = (url, action) => {
  routes['GET'][url] = action;
};

exports.post = (url, action) => {
  routes['POST'][url] = action;
};
