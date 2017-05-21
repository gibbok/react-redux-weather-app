const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets/', // virtual
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/', // virtual
    port: 8080,
    hot: true,
    inline: true
  },
  devtool: 'source-map',
  // devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['recharts'],
          presets: ['es2015']
        }
      }
    ]
  }
}
