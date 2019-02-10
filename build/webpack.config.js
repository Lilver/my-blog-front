const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config');

const isDev = process.env.NODE_ENV === 'development';

let config = {};
if (isDev) {
    config = merge(baseConfig, devConfig)
} else {
    config = merge(baseConfig, prodConfig)
}

module.exports = config;