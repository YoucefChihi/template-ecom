var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var vars = {
  entry: "./src/App.jsx",
  output: {
    path: __dirname + '',
    filename: 'app.js'
  },
}


module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: vars.entry,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass?indentedSyntax']
      }
    ]
  },
  output: {
    path: vars.output.path,
    filename: vars.output.filename
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};