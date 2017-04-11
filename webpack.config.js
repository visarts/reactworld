const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/less/styleMap.less', './src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bbtest.js'
  },
  plugins: [
		new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin('styles.css'),
    new OptimizeCssAssetsPlugin(),
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
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          options: {
             presets: ['es2015', 'react']
          }
        }
			},
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=image/svg+xml'
      }
		]
	}
};
