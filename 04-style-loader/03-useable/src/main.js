// require('./css/base.css')
import base from './css/base.css'
import blue from './css/theme-blue.css'
import yellow from './css/theme-yellow.css'
base.use()
blue.use()

console.log('main')
let btn = document.getElementById('btn')
let curTheme = 'blue'
btn.addEventListener('click', () => {
    if (curTheme === 'blue') {
        blue.unuse()
        yellow.use()
        curTheme = 'yellow'
        console.log(1111)
    } else {
        yellow.unuse()
        blue.use()
        curTheme = 'blue'
        console.log(2222)
    }
})