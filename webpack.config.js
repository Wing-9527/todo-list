const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  context: path.resolve(__dirname),
  devServer: {
    // open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: ['/node_modules'],
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: ['/node_modules'],
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.ts', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'todo-list',
      template: './index.ejs'
    }),
    new VueLoaderPlugin()
  ]
}
