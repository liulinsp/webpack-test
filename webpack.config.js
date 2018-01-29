const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    name: "app",
    dependencies: ["vendor"],
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[chunkHash:8].js"
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "public/manifest.json"),
            // content: path.resolve(__dirname, "dist"),
            // name:'vendor'
        }),
        new HtmlWebpackPlugin()
    ]
}

