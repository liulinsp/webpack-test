const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports ={
    name: "app",
    dependencies: ["vendor"],
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[chunkHash:8].js"
    },
    /*module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }],
    },*/
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        /* 复制静态文件的插件 */
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: path.join(__dirname, "dist/static"),
                ignore: ['.*']
            }
        ])
    ]
}

