module.exports = function (css) {
    console.log('原始css：\n', css)
    // Here we can change the original css
    const transformed = css.replace('#f2f2f2', '#f2dce4')
    console.log('转换后css：\n', transformed)
    return transformed
}