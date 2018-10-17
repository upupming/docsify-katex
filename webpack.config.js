const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'docsify-katex.js',
    path: path.resolve(__dirname, 'dist')
  }
};