const path = require('path')
const webpack = require('webpack')
const config = {
    entry: {
        a: './src/a',
        b: './src/b'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    optimization: {
        splitChunks: {
            // 过滤chunk的方式："initial" | "all"(默认就是all) | "async"
            // 也可以是方法，例：chunk => chunk.canBeInitial()
            chunks: "all",
            // 默认：0，拆分出的新chunk的不能小于指定字节数
            // minSize: 0,
            // 默认：1，如果一个模块同时被2个chunk使用则拆分出来
            minChunks: 2,
            // 默认: 1, 最大初始化请求数
            maxInitialRequests: 5,
            // 默认：1，最大异步请求数
            maxAsyncRequests: 3,
            // group 的 name 未制定时，名称拼接字符
            // 例：有2个初始chunk 'a'和'b', 如果common未指定name,则自动生成新chunk名称为：'common~a~b.b1fdeefd.js'
            automaticNameDelimiter: '~',
            // 文件名命名规则，类似output的filename
            // filename: '[name].[chunkhash].js',
            cacheGroups: {
                vendor: {
                    priority: -10, // 优先级
                    // 新chunk名称，此选项可接收 function
                    name: 'vendor',
                    minSize: 0, // 同上
                    minChunks: 1, // 同上
                    maxAsyncRequests: 3, // 同上
                    maxInitialRequests: 5, // 同上
                    // filename: '[name].[chunkhash].js', // 同上
                    // 模块名称（路径+文件名）的正则规则验证，如果符合就提取 chunk, 可以是function
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial', // 同上
                    // When no chunk name, check if we can reuse a chunk instead of creating a new one
                    reuseExistingChunk: true,
                    enforce: true, // 默认会与全局配置合并,如果为true,强制只使用当前配置
                },
                common: {
                    priority: -20,
                    name: 'common',
                    minSize: 0,
                    minChunks: 2,
                    maxInitialRequests: 5,
                    chunks: (chunk) => {
                        console.log('initial=====', chunk.canBeInitial(), 'chunk = ', chunk.name? chunk.name : chunk.debugId)
                        return chunk.canBeInitial()
                    }
                },
                async: {
                    priority: -30,
                    name: 'aCommon',
                    minSize: 0,
                    minChunks: 2,
                    maxAsyncRequests: 3,
                    chunks: (chunk) => {
                        console.log('async=====', !chunk.canBeInitial(), 'chunk = ', chunk.name? chunk.name : chunk.debugId)
                        return !chunk.canBeInitial()
                    }
                }
            }
        },
        // 拆分webpack运行时代码
        runtimeChunk: {name: 'manifest'},
        minimize: false // 为了观察打包后的文件不压缩
    },
    plugins: [
        // 模块命名插件，防止新增模块时，由于模块id的变化导致内容未变化chunk产生新的hash
        new webpack.NamedModulesPlugin()
    ]
}
/* const config = {
    entry: {
        // app: './src/main.js'
        a: './src/a',
        b: './src/b'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor', // 此选项可接收 function
                    test: /[\\/]node_modules[\\/]/, // 正则规则验证，如果符合就提取 chunk
                    chunks: 'initial',
                    // minChunks: 1,
                    filename: '[name].[chunkhash].js',// 文件名命名规则，类似output的filename
                    priority: -10 // 优先级
                },
                common: {
                    name: 'common',
                    minSize: 0,
                    minChunks: 2,
                    maxInitialRequests: 5,
                    chunks: (chunk) => {
                        console.log('initial=====', !chunk.canBeInitial(), 'chunk = ', chunk.name? chunk.name : chunk.debugId)
                        return chunk.canBeInitial()
                    },
                    priority: -20
                },
                async: {
                    name: 'aCommon',
                    minSize: 0,
                    minChunks: 2,
                    maxAsyncRequests: 3,
                    chunks: (chunk) => {
                        console.log('async=====', !chunk.canBeInitial(), 'chunk = ', chunk.name? chunk.name : chunk.debugId)
                        return !chunk.canBeInitial()
                    },
                }
            }
        },
        runtimeChunk: {name: 'manifest'},
        minimize: false
    },
    plugins: [
        // 模块命名插件，防止新增模块时，由于模块id的变化导致内容未变化chunk产生新的hash
        new webpack.NamedModulesPlugin()
    ]
} */
module.exports = config

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('打包异常')
        console.log('err:', err)
        console.log('stats:',stats)
    }
    console.log('打包完成')
})