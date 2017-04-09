var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin()
	],
  module: {
		rules: [
			{
				test: /\.less$/,
				use: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
			},
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      }
		]
	}
};
