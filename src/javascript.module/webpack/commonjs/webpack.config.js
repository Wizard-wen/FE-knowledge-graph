const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.html'),
  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, 'outs'),
    filename: 'index.html'
  }
};
