const path = require('path')
const webpack = require('webpack')
const modulesValues = require('postcss-modules-values')

let config = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // 类名hash字符串格式
                            localIdentName: '[path][name]-[local]-[hash:5]'
                        }
                    },
                    // $ npm install --save postcss-loader postcss-modules-values
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [modulesValues] // css 模块化的变量插件
                        }
                    }
                ]
            }
        ]
    },
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