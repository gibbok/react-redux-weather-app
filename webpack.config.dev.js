const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
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
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      // },
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
