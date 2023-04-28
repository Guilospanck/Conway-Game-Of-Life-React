const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = (env) => {
  const envfile = env.envfile || 'development'

  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      writeToDisk: true,
      historyApiFallback: true,
      watchContentBase: true,
      port: 3000
    },
    plugins: [
      new Dotenv({
        path: `.env.${envfile}`
      }),
      new HtmlWebpackPlugin({
        template: 'template.dev.html',
        favicon: './src/assets/png/game2.png'
      })
    ]
  })
}
