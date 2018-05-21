import Vue from 'vue'
import c from '../common/c'
import aa from './aa'
import aaa from './aaa'


console.info(aa)
console.log(aaa)
console.log(c)
import('../common/util').then(util => console.log(util))
import('../common/tool').then(tool => console.log(tool))
// import(/* webpackChunkName: 'asyncUtil' */'../common/util').then(util => console.log(util))
// import(/* webpackChunkName: 'asyncUtil' */'../common/tool').then(tool => console.log(tool))
new Vue()

export default 'a'