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
    path: path.resolve(__dirname, 'static')
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    publicPath: "http://0.0.0.0:3000/static/",
    hot: true,
    hotOnly: false, // TODO: toggle this to attempt to get hot reloading working
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};
