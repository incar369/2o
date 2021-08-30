const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  mode: 'development',
  //mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
};