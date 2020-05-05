const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.js');

const rootDir = path.resolve(__dirname, '..');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheet/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: "ts-loader"
      }]}, {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }]
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: './public',
    stats: 'minimal'
  }
});
