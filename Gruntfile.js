var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var pkgJson = require('./package.json');
var debug = process.env.NODE_ENV;

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: pkgJson,
    webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins
			},
		}
  });

  grunt.registerTask('build', [
    'webpack'
  ]);

  grunt.registerTask('default', [
		'build'
	]);

  grunt.loadNpmTasks('grunt-webpack');
};
