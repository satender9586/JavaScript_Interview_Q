// how to reverce number use of prebuild method

function reverKaro(num){
    let rev =  num.toString().split("").reverse().join("")
    return rev
}

console.log(reverKaro(123456))
