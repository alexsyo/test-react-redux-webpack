module.exports = {
  entry: './client/src/Start.js',
  output: {
    filename: 'bundle.js',
    path: './client/dist/js/'     
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
