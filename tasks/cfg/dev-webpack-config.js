var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.join(__dirname, '..', '..');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(ROOT_PATH, 'src/app/client.js'),
    path.resolve(ROOT_PATH, 'src/styles/app.styl')
  ],
  output: {
    path: path.resolve(ROOT_PATH, '../build/public'),
    filename: 'app.js',
    publicPath: '/build/public/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loader: 'babel'
    },
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
};
