const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = (env) => {
  const envfile = env.envfile || 'production'

  return merge(common, {
    mode: 'production',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    optimization: {
      // vendor bundle
      splitChunks: {
        chunks: 'all'
      },
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    plugins: [
      new Dotenv({
        path: `.env.${envfile}`
      }),
      new HtmlWebpackPlugin({
        template: 'template.prod.html',
        favicon: './src/assets/png/game2.png'
      })
    ]
  })
}
