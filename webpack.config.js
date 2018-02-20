var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
	'faker',
	'lodash',
	'redux',
	'react-redux',
	'react-dom',
	'react-input-range',
	'redux-form',
	'redux-thunk',
	'react',
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS,
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/,
			},
		],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
		}),
		new htmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
