const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// dll 构建
/*module.exports = {
    name: "vendor",
    entry: {
        vendor: ['./src/c.js', './src/cc.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.resolve(__dirname, "public/manifest.json")
        })
    ]
}*/

// 应用构建
module.exports = {
    name: "app",
    dependencies: ["vendor"],
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[chunkHash:8].js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }],
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "public/manifest.json"),
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

