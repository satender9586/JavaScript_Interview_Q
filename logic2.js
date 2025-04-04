// how to reset Array and empty 

let arr =  Array.from("123456789")
let arr2 = 55
let newArray = Array.of(arr2,arr)
// arr.length = 0
let flatArray = newArray.flat()
console.log(flatArray)