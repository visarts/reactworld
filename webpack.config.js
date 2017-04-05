var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bbtest.js'
  },
  plugins: [
		new CleanWebpackPlugin('dist'),
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
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
			},
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
		]
	}
};
