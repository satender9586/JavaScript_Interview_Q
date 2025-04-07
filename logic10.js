// number of occurrences of each letter

function letteCount(str){
    const obj = {};
    
    for(let key of str){
       if(!obj[key]){
            obj[key]=1
       }else{
        obj[key] = obj[key]+1
       }
    }
    console.log(obj)
}

letteCount("hello")