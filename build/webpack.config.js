const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const testConfig = require('./webpack.test.config');
const prodConfig = require('./webpack.prod.config');

const isDev = process.env.NODE_ENV === 'development';

let config = {};
if (isDev) {
  config = merge(baseConfig, testConfig);
} else {
  config = merge(baseConfig, prodConfig);
}

module.exports = config;