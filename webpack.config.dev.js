const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/assets/', //virtual
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/assets/', //virtual
        port: 8080,
        hot: true,
        inline: true
    },
    devtool: 'source-map',
    //devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};