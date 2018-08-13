var path = require('path');
var sassTrue = require('sass-true');

function importer(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return { file: url };
}

var sassFile = path.join(__dirname, 'test.scss');
sassTrue.runSass({ importer, file: sassFile }, describe, it);
