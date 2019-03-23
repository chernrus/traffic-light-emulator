const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve('src')
    }
  },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin()
  ]
}
