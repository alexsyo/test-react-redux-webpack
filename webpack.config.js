var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/src/Start.js',
  output: {
    filename: 'bundle.js',
    path: './client/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
