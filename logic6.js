// check single string word is palimdrom 

function checkPalindrom(str){
    const reveStr = str.split("").reverse().join("")
    if(reveStr===str){
        return true
    }else{
        return false
    }
}

const palin =  checkPalindrom("ollo")

console.log(palin)