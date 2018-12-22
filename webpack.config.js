const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./dist-babel/bin/www.js",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
};
