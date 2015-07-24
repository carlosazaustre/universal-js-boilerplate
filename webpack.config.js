var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [ path.resolve(ROOT_PATH, 'src/app/client/index') ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path.resolve(ROOT_PATH, 'build/public'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=1',
        include: path.resolve(ROOT_PATH, 'src/app/client')
      },
    ],
  },
};

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJSPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      });
    ]
  });
}

if (TARGET === 'dev') {
  module.exports = merge(common, {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/dev-server'
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.resolve(ROOT_PATH, 'src/app/client')
        }
      ]
    }
  });
}
