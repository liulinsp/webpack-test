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
  plugins: [
    // 模块命名插件，防止新增模块时，由于模块id的变化导致内容未变化chunk产生新的hash
    // new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProgressPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      // names: ['a', 'b'],
      // the name or list of names must match the name or names
      // of the entry points that create the async chunks
      children: true,
      async: 'asyncCommon',
      minChunks: function (module, count) {
        console.log('module---------------------', module.resource)
        console.log('count-----------------------', count)
        return count >= 2
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'render',
      chunks: ['a', 'b'],
      children: false,
      minChunks: function (module, count) {
        // console.log('module---------------------', module.resource)
        // console.log('count-----------------------', count)
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      },
      minSize: 0
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['a', 'b'],
      minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
      minChunks: Infinity
    })
  ]
}

module.exports = config

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log('打包异常')
    console.log('err:', err)
    console.log('stats:', stats)
  }
  console.log('打包完成')
})
