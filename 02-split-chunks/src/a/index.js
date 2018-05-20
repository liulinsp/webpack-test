import Vue from 'vue'
import c from '../common/c'
import aa from './aa'
import aaa from './aaa'


console.info(aa)
console.log(aaa)
console.log(c)
const util = import('../common/util')
util.then((obj) => console.log(obj))
const tool = import('../common/tool')
tool.then((obj) => console.log(obj))
new Vue()

export default 'a'