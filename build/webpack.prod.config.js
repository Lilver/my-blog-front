const path = require('path');

const parallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
module.exports = {
    mode: "production",
    module:{
        rules:[
            {
                test: /\.(woff|woff2|svg|ttf|eot)/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'font/[name].[ext]',
                },
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.(jpg|png|gif|jpeg|bmp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[ext]',
                },
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    optimization: {
        minimizer: [
            new parallelUglifyPlugin({
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
                    }
                }
            })
        ]
    }
}