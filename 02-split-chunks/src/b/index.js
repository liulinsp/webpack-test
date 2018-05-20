import Vue from 'vue'
import bb from './bb'
import c from '../common/c'

console.log(bb)
console.log(c)
const util = import('../common/util')
util.then((obj) => console.log(obj))
new Vue()

export default 'b'