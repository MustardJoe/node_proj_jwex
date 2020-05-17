let ejs = require('ejs'),
  people = ['geddy', 'neil', 'alex'],
  html = ejs.render('<%= people.join(", "); %>', { people: people }),
  layout = require('../views/layout.ejs');

/* eslint-disable-next-line no-console */
console.log('im in the home controller');

exports.getName = (req, res) => {
  console.log('trying to get name...', res);
  res.send(layout);
};
