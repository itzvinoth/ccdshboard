var webpack = require('webpack');
var path = require('path');

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loader: "babel-loader"
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1'],
    exclude: ['node_modules']
  }
];


module.exports = {
  entry: [
    './dev/index.jsx'
  ],
  output: {
    publicPath: './',
    path: path.join(__dirname),
    filename: 'app.min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};
