// https://webpack.js.org/configuration/
const path = require('path');
// Automatically injects the built files into an html file.
// Integrates well with webpack dev server
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    profile: './src/profile',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].poop.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new  webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.gif$/,
        use:[{
          loader: 'url-loader',
          options: {limit: 1000}, // if file exceeds this then it generates a file by magic
        }],
      }
    ]
  }
};


/// PREV

 // rules: [
 //      {
 //        test: /\.gif$/,
 //        use: 'url-loader' // can pass in an array of objects in order to provide options
 //      }
 //    ]