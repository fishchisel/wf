'use strict';

var path = require('path');

module.exports = {
  cache: true,
  entry: {
    main: './src/ts/app.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader'
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
      ]
    }]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
};