// ES6 模块化编写的模块可以tree shaking
import {a} from './util.esm.js'
// CommonJS 语法编写的模块，无法tree shaking
import {A} from './util.com.js'
console.log(a())
console.log(A())