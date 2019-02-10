const path = require('path');

const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8080,
        hot: false,
        overlay: {
            error: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|svg|ttf|eot)/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(jpg|png|gif|jpeg|bmp)$/,
                loader: 'file-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin(

            )
        ]
    }
}