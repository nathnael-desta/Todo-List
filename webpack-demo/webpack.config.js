const path = require('path');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    dycalendar: './src/dycalendar.min.js'},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'dist'),
    ],
},
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
};