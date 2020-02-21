/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin'); // 引入 PWA 插件

const PurifyCss = require('purifycss-webpack');
const glob = require('glob-all');

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
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new PurifyCss({
      // 要做 CSS Tree Shaking 的路径文件
      paths: glob.sync([
        path.resolve(__dirname, '../src/*.html'), // 同样需要对 html 文件进行 tree shaking
        path.resolve(__dirname, '../src/*.js'),
      ]),
    }),
  ],
};