const path = require('path');

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
  }
};
