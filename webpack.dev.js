const { merge } = require("webpack-merge");
const common = require('./webpack.common.js')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',

    devServer: {
        port: 3000,
        open: true,
        hot: true,
        clientLogLevel: 'silent'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /.s[ac]ss/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                use: 
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: [require("react-refresh/babel")]
                    }
                },
                exclude: /node_modules/ 
            }
        ]
    },

    optimization: {
        runtimeChunk: 'single'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
})
