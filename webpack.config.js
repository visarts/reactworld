const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/less/shared/global.less', './src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
		new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin({
      filename: '[name].styles.css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
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
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1&modules&localIdentName=[name]___[local]',
            'postcss-loader?parser=postcss-less',
            'less-loader'
          ]
        })
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          options: {
            plugins: [
                [
                  'react-css-modules',
                  {
                    'generateScopedName': '[name]___[local]',
                    'filetypes': {
                      '.less': 'postcss-less'
                    }
                  }
                ]
              ],
             presets: ['es2015', 'react']
          }
        }
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
