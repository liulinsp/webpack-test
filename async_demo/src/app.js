document.querySelector('#a').addEventListener('click', function () {
    require.ensure([], function(require){
        require('./a.js').default()
    })
})
document.querySelector('#b').addEventListener('click', function () {
    require.ensure([], function(require){
        require('./b.js').default()
    })
})
