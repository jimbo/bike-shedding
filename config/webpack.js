const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  mode: "development",
  entry: "../src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "client.js",
    publicPath: "/",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"],
  },
  devtool: "inline-source-map",
  context: __dirname,
  target: "web",
  devServer: {
    hot: true,
    port: 9001
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ title: "Bike Shedding" }),
  ],
}

module.exports = config
