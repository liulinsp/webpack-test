// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {
      addModulesDirectories: ["node_modules", "my-modules"]
    },
    "postcss-url": {},
    // "autoprefixer": {}
  }
}
