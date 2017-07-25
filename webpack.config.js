const webpack = require('webpack');

module.exports = {
  entry: [
    "react-hot-loader/patch",
    'webpack-dev-server/client?http://localhost:8080',
    './src/entry.js',
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
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}
