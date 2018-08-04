// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // "postcss-import": {},
    // "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      // 可以指定browsers，不过最好在package.json中配置browserslist，这样babel也可以共用该配置
      /* browsers:[
          "android >= 4",
          "ios >= 6",
          "> 1%",
          "last 2 versions",
          "not ie <= 8"
      ] */
    }
  }
}
