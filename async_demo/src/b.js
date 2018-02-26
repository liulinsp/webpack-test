// import c from './c.js'
// import cc from './cc.js'
export default function () {
    var name = 'b'
    console.log(name)
    // c()
    // cc()
    require.ensure([], function(require){
        var cc = require('./cc.js').default
        require.ensure([], function(require){
            var c = require('./c.js').default
            cc()
            c()
        })
    })
    return name
}