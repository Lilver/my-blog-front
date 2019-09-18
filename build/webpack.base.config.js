const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const baseConfig = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', 'jsx', '.json'],
    alias: {
      "components": path.resolve(__dirname, '../src/components'),
      "assets": path.resolve(__dirname, '../src/assets'),
      "utils": path.resolve(__dirname, '../src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // minify: true,
              modules: {
                localIdentName: '[local]_[md5:contenthash:hex:5]',
              },
            },

          },
          {
            loader: 'postcss-loader',
            options: {
              ident: "postcss",
              plugins: [
                require("autoprefixer")("last 100 versions"),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
                        
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../static/index.html'),
      inject: 'body',
      favicon: path.resolve(__dirname, '../static/favicon.ico'),
    }),
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin({
      filename: isDev ? `[name]_[hash:5].css` : '[name].css',
    }),
  ],
};

module.exports = baseConfig;