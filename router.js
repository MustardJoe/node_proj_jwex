const httpStatus = require('http-status-codes'),
  constentTypes = require('./contentTypes'),
  utils = require('./utils');

const routes = {
  'GET': {},
  'POST': {}
};

exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  }
  catch(problem) {
    res.writeHead(httpStatus.OK, constentTypes.html);
    utils.getFile('views/error.html', res);
  }
};

exports.get = (url, action) => {
  routes['GET'][url] = action;
};

exports.post = (url, action) => {
  routes['POST'][url] = action;
};
