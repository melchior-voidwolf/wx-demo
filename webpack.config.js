const webpack = require('webpack')
const path = require('path')

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'app/App.js'),
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    open: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '@page': path.resolve(__dirname, 'app', 'page'),
      '@component': path.resolve(__dirname, 'app', 'component'),
      '@style': path.resolve(__dirname, 'app', 'style'),
    },
    modules: ['node_modules'],
  }
}

module.exports = config
