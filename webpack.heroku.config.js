const webpack = require('webpack');

module.exports = {
  entry: [
    './src/entry.js'
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017', 'react']
          }
        }
      }
    ]
  }
}
