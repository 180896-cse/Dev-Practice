// Given an input string, returns number of words contained in the string.

let str = "Hi there its Javascript";
str = str.trim();
countWords = (str) => {
    
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            count=count+1;
        }
    }
    return count;
}

console.log(countWords(str));


// console.log(str.split(" ").length);