const { merge } = require("webpack-merge");
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    target: 'browserslist',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /.s[ac]ss/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },

    optimization: {
        moduleIds: 'deterministic',

        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
        splitChunks: {      
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            }
        }
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ]
})