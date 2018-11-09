const path = require('path');

module.exports = {
	entry: {
		app: './src/index.js',
		'production-dependencies': ['phaser']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'images/'
					}
				}]
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src/', 'src/scenes'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development'
};
