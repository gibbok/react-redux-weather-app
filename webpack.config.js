const path = require('path');

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/', //virtual
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/assets/', //virtual
        inline: true,
        port: 8080
    },
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