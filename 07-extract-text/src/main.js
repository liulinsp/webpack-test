import a from './css/a.scss'
import(/* webpackChunkName: 'b' */ './b.js').then(b => {
    console.log(b.default)
})
