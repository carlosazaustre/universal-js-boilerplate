var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.join(__dirname, '..', '..');

module.exports = {
  entry: {
    app: path.resolve(ROOT_PATH, 'src/app/client.js'),
    styles: path.resolve(ROOT_PATH, 'src/styles/app.styl')
  },
  output: {
    path: path.resolve(ROOT_PATH, '../build/public'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};
