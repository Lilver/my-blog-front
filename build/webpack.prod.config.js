/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot)/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[ext]',
        },
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.(jpg|png|gif|jpeg|bmp|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[ext]',
        },
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },
  optimization: {
    minimizer: [
      new ParallelUglifyPlugin({
        uglifyJS: {
          output: {
            beautify: false,
            comments: false,
          },
          compress: {
            // warnings: false,
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true,
          },
        },
      }),
    ],
  },
};