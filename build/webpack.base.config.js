const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');

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
                test: /\.(less|css)/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?minimize=true',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: "postcss",
                                plugins: [
                                    require("autoprefixer")("last 100 versions")
                                ]
                            }
                        },
                        'less-loader'
                    ]
                })
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
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`
        })
    ]
}



module.exports = baseConfig;