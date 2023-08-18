const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./main.tsx",
	devtool: "inline-source-map",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	devtool: "inline-source-map",
	devServer: {
		port: 3030,
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/, // styles files
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@images": path.resolve(__dirname, "src/assets/images"),
			"@fonts": path.resolve(__dirname, "src/assets/fonts"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
};
