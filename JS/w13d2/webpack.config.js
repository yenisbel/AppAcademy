const path = require('path');

module.exports = {
	entry: './react_minesweeper.jsx',
	output: {
		path: path.resolve(__dirname), //path takes you to project directory
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: [ '@babel/env', '@babel/react' ]
					}
				}
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '*' ]
	}
};
