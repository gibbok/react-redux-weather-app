module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'app.bundle.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};