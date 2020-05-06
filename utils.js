const fs = require('fs'),
  httpStatus = require('http-status-codes'),
  contentTypes = require('./contentTypes');

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      console.log('file in getFile',  file);
      if(error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end('Error: some kind of error halpened...');
      }
      console.log('res', res);
      res.end(data);
    });
  }
};