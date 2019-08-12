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
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'static')
  },
  devServer: {
    port: 3000,
    publicPath: "http://0.0.0.0:3000/static/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
