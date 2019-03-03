var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var MiniCss=require("mini-css-extract-plugin");
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, 'src/js/1.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "js/bundle.js"
	},

	module: {
		rules: [
			{ test: /\.css$/, use: [MiniCss.loader, 'css-loader'] },
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{test:/\.(jpg|png|gif|jpeg|bmp)$/,use:'url-loader?limit=1,outputPath=img'},
			{test:/\.html$/,use: 'html-withimg-loader'}
		]
	},
	
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "src/main.html"),
			filename: "index.html"
		}),

		new MiniCss({
			filename: "main.css",
		})
	],
}
