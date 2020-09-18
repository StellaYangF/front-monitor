const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = pathname => path.resolve(__dirname, pathname)
console.log(process.cwd())

module.exports = {
  mode: 'development',
  context: process.cwd(),
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'monitor.js'
  },
  devServer: {
    contentBase: resolve('dist')
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
}