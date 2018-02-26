// import c from './c.js'
// import cc from './cc.js'
export default function () {
    var name = 'a'
    console.log(name)
    // c()
    // cc()
    require.ensure([], function(require){
        // var c = require('./c.js').default
        var cc = require('./cc.js').default
        cc()
    })
    return name
}