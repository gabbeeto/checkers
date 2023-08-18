const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './source/main.js',
	devtool: 'inline-source-map',
	plugins: [new html({template: './source/index.html'})],
	output:{
		filename:'[name]-[contenthash].js',
		path: path.resolve(__dirname, 'distribution'),
		assetModuleFilename: 'img/[name][ext]',
		clean: true,
	},
	module:{
		rules: [{test:/\.css$/i, use: ['style-loader', 'css-loader']}, {test: /\.png$/i, type: 'asset/resource'}]
	}
}
