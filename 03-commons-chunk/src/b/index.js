import Vue from 'vue'
import bb from './bb'
import c from '../common/c'

console.log(bb)
console.log(c)
import('../common/util').then(util => console.log(util))
// import(/* webpackChunkName: 'asyncUtil' */'../common/util').then(util => console.log(util))
new Vue()

export default 'b'
