const webpack = require('webpack')
const path = require('path')

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'app/App.js'),
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
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
      },
      {
        test: /\.css$/,
        exclude: /node_modules\/(?!(react-wx-images-viewer))/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
        ]
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'docs'),
    historyApiFallback: true,
    compress: true,
    open: false,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'X-Frame-Options': 'ALLOW-FROM *',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '@page': path.resolve(__dirname, 'app', 'page'),
      '@component': path.resolve(__dirname, 'app', 'component'),
      '@util': path.resolve(__dirname, 'app', 'util'),
      '@style': path.resolve(__dirname, 'app', 'style'),
    },
    modules: ['node_modules'],
  }
}

module.exports = config
