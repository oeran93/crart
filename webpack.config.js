const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: __dirname + '/sharer/views/entry.js',
  },
  output: {
    path: __dirname + '/sharer/views/static/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};