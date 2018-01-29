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
    resolve: {
        /*  设置模块所在的目录(自定义类似node_modules的根目录,该目录下的模块引用时不带路径)
            1. 相对路径会在每一层父级目录中查找（类似 node_modules）
            2. 绝对路径会直接查找
            3. 会按照指定的顺序查找
            默认： modules: ['node_modules']
        */
        modules: [path.resolve(__dirname, 'my-module'), 'node_modules'],
        /* 描述文件 - 设置模块描述文件的名称，默认：['package.json']*/
        descriptionFiles: ['package.json', 'bower.json'], /*  默认： descriptionFiles: ['package.json']*/
        /* 设置模块入口字段*/
        mainFields: ['browser', 'module', 'main', 'entry'] // 默认： mainFields: ['browser', 'module', 'main']
        // mainFiles: ['index']
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
/*
webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('打包异常')
        console.log('err:', err)
        console.log('stats:',stats)
    }
    console.log('打包完成')
})
*/
