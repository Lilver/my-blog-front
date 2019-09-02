const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const baseConfig = {
    entry: {
        index: path.join(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // minify: true,
                            modules: {
                                localIdentName: '[local]_[md5:contenthash:hex:5]',
                            }
                        }

                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: "postcss",
                            plugins: [
                                require("autoprefixer")("last 100 versions")
                            ]
                        }
                    },
                    {
                        loader: require.resolve('less-loader'),
                        
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../static/index.html'),
            inject: 'body',
            favicon: path.resolve(__dirname, '../static/favicon.ico'),
        }),
        new CleanWebpackPlugin('dist'),
        new miniCssExtractPlugin({
            filename:  isDev ? `[name]_[hash:5].css` : '[name].css'
        })
    ]
}



module.exports = baseConfig;