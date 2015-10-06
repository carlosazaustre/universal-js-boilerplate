var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./tasks/cfg/webpack-config');

var TARGET = process.env.TARGET;

switch (TARGET) {
  case 'build':
    module.exports = merge(
      config,
      {
        devtool: 'source-map',
        loaders: [
          { test: /\.json$/, exclude: /node_modules/, loader: 'json' }
        ],
        plugins: [
          new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
          }),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          })
        ]
      }
    );
    break;
  case 'dev':
    module.exports = merge(
      config,
      {
        devtool: 'eval',
        entry: [
          'webpack/hot/dev-server'
        ],
        module: {
          loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader', 'eslint-loader']
          }]
        }
      }
    );
    break;
}
