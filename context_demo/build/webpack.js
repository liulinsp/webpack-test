const path = require('path')
const webpack = require('webpack')
const contextPath = path.resolve(__dirname, "../")

module.exports = {
    /* 基础目录 */
    context: contextPath, // 默认使用当前目录(使得你的配置独立于 CWD(current working directory - 当前执行路径))
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(contextPath, 'dist'),
        filename: '[name].[chunkHash:8].js'
    },
    module: {
        loaders: [],
    },
    plugins: []
}



