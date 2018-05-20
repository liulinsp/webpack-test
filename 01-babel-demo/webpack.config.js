const path = require('path')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'/* ,
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime'] // 不污染全局的垫片
                    } */
                }
            }
        ]
    }
}

// .babelrc 配置了生产环境去console, 执行下面命令
// BABEL_ENV=production webpack