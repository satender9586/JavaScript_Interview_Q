// first leter capital of stirng

function firstLetterCapital(str){
    const firstLetter= str.split(" ").map((item)=> item.charAt(0).toUpperCase()+item.slice(1))
    console.log(firstLetter)
}
firstLetterCapital("hello buddy kese ho")