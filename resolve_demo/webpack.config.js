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
        // 模块目录有两个：自定义的my-module 和 默认的 node_modules

        /* 描述文件 - 设置模块描述文件的名称，默认：['package.json'] */
        descriptionFiles: ['package.json', 'bower.json'], // 默认： descriptionFiles: ['package.json']
        // 描述文件可以是package.json,也可以是bower.json; 描述文件中入口字段指定的文件就是入口文件

        /* 模块入口字段, 是描述文件的一个字段，用来指定入口文件 */
        mainFields: ['main', 'entry'], // 默认： mainFields: ["browser", "module", "main"]
        // ## my-util模块的描述文件是package.json，入口字段是entry，这个字段指定的入口文件是util-entry.js
        // ## my-tool模块的描述文件是bower.json，入口字段是main，这个字段指定的入口文件是main.js

        /* 入口文件 */
        mainFiles: ['index'], // 默认：mainFiles: ["index"]
        // ## my-look模块没有描述文件，默认的入口文件就是index.js

        /* 别名字段 ????? */
        // 别名字段：描述文件中的这些字段提供了该包的别名对照关系。
        // 这些字段的内容是一个对象，每当请求某个键名时，就会映射到对应的键值。
        aliasFields: ["browser"], // 默认：aliasFields: ["browser"]

        /* 扩展名：当解析文件时，如果没有指定扩展名，就会尝试添加这些扩展名 */
        extensions: [".js", ".json", ".vue"], // 默认：extensions: [".js", ".json"],
        // import c from './c' 解析时会尝试添加扩展名 import c from './c.js'

        /* 强制使用扩展名：如果值为 false，在解析一个文件时，也会尝试匹配无扩展名的文件 */
        enforceExtension: false,

        /* 模块后缀名(类似文件扩展名) */
        // moduleExtensions: ["-loader"], // 没有默认值

        /* 强制使用模块后缀名(类似强制使用扩展名) */
        enforceModuleExtension: false,

        /* 模块别名 */
        alias: {
            jquery: path.resolve(__dirname, "vendor/jquery.js")
        }
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

/*webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('打包异常')
        console.log('err:', err)
        console.log('stats:',stats)
    }
    console.log('打包完成')
})*/

