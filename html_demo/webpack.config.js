const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


var config = {
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
                if(module.resource.indexOf('c.js') > -1){
                    console.log('true')
                    return true
                }
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

module.exports =  config
webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('打包异常')
        console.log('err:', err)
        console.log('stats:',stats)
    }
    console.log('打包完成')
})
