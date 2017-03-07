var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		test: /.jsx?$/,
		loader: 'babel-loader',
		exclude: [/dist/, /node_modules/, /server/],
		query: {
			presets: ['es2015', 'react']
		}
	},
	{
		test: /\.css$/,
		loader: extractTextPlugin.extract('css-loader!sass-loader'),
		exclude: ['node_modules', 'dist']
	},
	{
		test: /\.scss$/,
		loader: extractTextPlugin.extract('css-loader!sass-loader'),
		// loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
		exclude: ['node_modules', 'dist']
	}
];