const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = { 
    entry: {
        polyfills: './src/polyfills.js',
        main: './src/index.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    cache: true,

    module: {
        rules: [ 
            {
                test: /\.(js|ts)x?$/,
                use: 
                {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif|)$/,
                type: 'asset'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            inject: true
        }),
        new ImageMinimizerPlugin({
            severityError: "warning",
            minimizerOptions: {
              plugins: ["gifsicle"],
            },
        loader: false,
        })
    ]
}
