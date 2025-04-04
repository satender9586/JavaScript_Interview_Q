// check element is Array

function checkArray(elem){
    if(Array.isArray(elem)){
        return true
    }else{
        return false
    }
}

console.log(checkArray([]))