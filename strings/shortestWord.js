// Given an input string, returns the shortest word contained in the string.

let str = "returns the shortest word";
str = str.split(" ");
console.log(str);
shortestWord = (str) => {
    let temp="qwertyuiopasdfghjklzxcvbnm";
    for(let i=0;i<str.length;i++){
        if (temp.length>str[i].length){
            temp=str[i];
        }
    }
    return temp;
    
}

console.log( shortestWord(str));