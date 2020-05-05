const httpStatus = require('http-status-codes');
const htmlContentType = {
  'Content-Type': 'text/html'
};
const routes = {
  'GET': {
    '/info': (req, res) => {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/plain'
      });
      res.end('<h1>Welcome to the INFO Page silly mortal</h1>');
    }
  },
  'POST': {}
};

exports.handle = (req, res) => {
  try {
    if(routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    }
    else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end('<h1>404 Page stupid doo doo dumb</h1>')
    }
  }
  catch(problem) {
    console.log('Error: ', problem);
  }
};

exports.get = (url, action) => {
  routes['GET'][url] = action;
};

exports.post = (url, action) => {
  routes['POST'][url] = action;
};