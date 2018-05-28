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
        /*rules: [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]*/
        rules: [
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader/url',
                        options: {
                            attrs: {
                                id: 'baseLink'
                            }
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
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