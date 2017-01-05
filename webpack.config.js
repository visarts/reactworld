var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./js/app.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bbtest.js'
  },
  plugins: [
		new CleanWebpackPlugin('dist'),
		new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
	],
  module: {
		loaders: [
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
        query: {
           presets: ['es2015', 'react']
        }
			},
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.jpg$/,
        loader: 'file'
      }
		]
	}
};
