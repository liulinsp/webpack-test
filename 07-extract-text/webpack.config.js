const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    mode: 'production',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: 'static/[name].[chunkHash:8].js',
        chunkFilename: 'static/[name].async.[chunkHash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'static/[name].[chunkHash:8].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    optimization: {
        minimize: false
    }
}

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('打包异常')
        console.log('err:', err)
        console.log('stats:',stats)
    }
    console.log('打包完成')
})