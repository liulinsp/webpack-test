const path = require('path')
const webpack = require('webpack')

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
                use:[
                    {
                        loader: 'style-loader',
                        options: {
                            transform: './src/transform.js'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
        /* rules: [
            {
                test: /\.css$/,
                use:['style-loader/url', 'file-loader']
            }
        ] */
        /*rules: [
            {
                test: /\.css$/,
                use:['style-loader/useable', 'css-loader']
            }
        ]*/
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