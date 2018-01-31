const path = require('path');
const webpack = require("webpack");                    // for HMR

module.exports = {
  context: __dirname,
  entry: [
    "react-hot-loader/patch",                          // for HMR
    "webpack-dev-server/client?http://localhost:8080", // for HMR
    "webpack/hot/only-dev-server",                     // for HMR
    './js/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,                                         // for HMR
    historyApiFallback: true,
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),          // for HMR
    new webpack.NamedModulesPlugin()                   // for HMR
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
