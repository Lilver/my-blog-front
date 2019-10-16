const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
const HappyPack = require('happypack');
const PurifyCss = require('purifycss-webpack');
const glob = require('glob');

const isDev = process.env.NODE_ENV === 'development';
const baseConfig = {
  entry: {
    bundle: path.join(__dirname, '../src/index.jsx'),
    vendor: ['react', 'react-dom'],   
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
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
          loader: 'happypack/loader?id=babel',
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
  optimization: {
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      usedExports: true, // use js tree shaking
    },
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
    new HappyPack({
      id: 'babel',
      threads: 4,
      loaders: ['babel-loader'],
    }),
    new webpack.optimize.ModuleConcatenationPlugin(), // 作用域提升
    new PurifyCss({
      // 要做 CSS Tree Shaking 的路径文件
      paths: glob.sync([
        path.resolve(__dirname, '../src/*.html'), // 同样需要对 html 文件进行 tree shaking
        path.resolve(__dirname, '../src/*.js'),
      ]),
    }),
  ],
};

module.exports = baseConfig;