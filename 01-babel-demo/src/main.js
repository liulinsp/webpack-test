const add = (a,b) => a+b

const arr = [1,2,3]
for(let item of arr){
    console.log(item)
}
Promise.resolve().then( () => {
    console.log('promise')
})