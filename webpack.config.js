var path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './main.js',
    pain: './pain.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'pain'],
      async: true,
      minChunks: (module, count) => /node_modules/.test(module.userRequest),
    }),
  ],
}
