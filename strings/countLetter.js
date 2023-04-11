// Given an input string and a target letter, returns the number of times
// the target letter appears in the string.

let str = "countLetter";
let key = 'e';
let count = 0;
countLetter = (str, key) =>{
    for(let i =0;i<str.length;i++){
        if(str[i] ==  key){
            count += 1;
        }
    }
    return count;
}

console.log(countLetter(str, key));