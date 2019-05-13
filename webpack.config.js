var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/bin/www.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        query: { compact: false },
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  node: {
    fs: 'empty',
    net: 'empty'
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
