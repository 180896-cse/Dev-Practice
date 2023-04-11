// Given an input string, returns a copy of the string with all-uppercase letters.

let str = "HelLo fRiends!";

capitalize = (str) => {
    for(let i =0;i<str.length;i++){
      
        str =  str.replace(str[i],str[i].toUpperCase()) ;
        
    }
    return str;
    
}

console.log(capitalize(str));