/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: "0.0.0.0", // 可以手机访问
    inline: true,
    port: 3000,
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    hotOnly: false,
    hot: false,
    open: true,
    overlay: {
      error: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot)/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[ext]',
        },
      },
      {
        test: /\.(jpg|png|gif|jpeg|bmp|svg)$/,
        loader: 'file-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin(

      ),
    ],
  },
}