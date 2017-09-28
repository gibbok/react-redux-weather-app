const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    alias: {
      openlayers: 'openlayers/dist/ol-debug.js'
    }
  },
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
    inline: true,
    historyApiFallback: true
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
          plugins: [
            'recharts',
            'transform-flow-strip-types',
            'transform-class-properties'
          ],
          presets: [
            'es2015',
            'stage-0',
            'stage-2'
          ]
        }
      }
    ]
  }
}
