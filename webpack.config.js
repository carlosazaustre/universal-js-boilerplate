var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [
    path.resolve(ROOT_PATH, 'src/app/client/index.js'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'build/public'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }

};

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?stage=1'],
          exclude: /node_modules/
        }
      ]
    },
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
  })
}

if (TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'eval',
    entry: [
      'webpack/hot/dev-server',
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?stage=1'],
        exclude: /node_modules/
      }]
    }
  })
}
