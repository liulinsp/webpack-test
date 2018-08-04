const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkHash:8].js',
        chunkFilename: '[id].[chunkHash].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'render',
            chunks: ['app'],
            children: false,
            minChunks: function (module, count) {
                console.log('module---------------------', module.resource)
                console.log('count-----------------------', count)
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}



