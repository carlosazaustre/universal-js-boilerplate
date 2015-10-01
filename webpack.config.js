var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

/*var nodeModules = {};
fs.readdirSync('./node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });*/

var common = {
  entry: {
    app: path.resolve(ROOT_PATH, 'src/app/client/index.js'),
    styles: path.resolve(ROOT_PATH, 'src/styles/app.styl')
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build/public'),
    filename: 'app.js',
  },
  //externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?stage=0']
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
    new ExtractTextPlugin('styles.css')
  ]
};

if (TARGET === 'build') {
  module.exports = merge(common, {
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
  })
}

if (TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'eval',
    entry: [
      'webpack/hot/dev-server'
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0']
      }]
    }
  })
}
