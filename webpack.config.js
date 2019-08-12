const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './assets/index.js',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: "http://0.0.0.0:3000/static/"
  },
  devServer: {
    // conetntBase: path.join(__dirname, "static/"),
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    publicPath: "http://0.0.0.0:3000/static/",
    hotOnly: false, // TODO: toggle this to attempt to get hot reloading working
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};
