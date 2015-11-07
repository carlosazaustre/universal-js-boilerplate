var devConfig = require('./tasks/cfg/dev-webpack-config');
var buildConfig = require('./tasks/cfg/build-webpack-config');

const TARGET = process.env.TARGET;

if (TARGET === 'build') {
  module.exports = buildConfig;
} else {
  module.exports = devConfig;
}
