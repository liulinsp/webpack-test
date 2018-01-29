const path = require('path')
const MultiPageWebpackPlugin = require('multipage-webpack-plugin')
const getEntries = require('./entryUtil')


module.exports = {
    entry: getEntries('./src/pages', 'entry.js', {
        vendor: [path.resolve(__dirname, 'src/jquery.js'), path.resolve(__dirname, 'src/angular.js')]
    }),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkHash:8].js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }],
    },
    plugins: [
        new MultiPageWebpackPlugin({
            templatePath: path.resolve(__dirname, 'dist'),
            templateFilename: '[name].html',
            htmlTemplatePath: path.resolve('src/pages/[name]/index.html'),
            htmlWebpackPluginOptions: {
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: false,
                    removeAttributeQuotes: false
                },
                chunksSortMode: 'auto'
            }
        }),
    ]
}



