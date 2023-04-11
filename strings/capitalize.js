// Given an input string, returns a copy of the input string with the
// first letter capitalized.

let sampleStr = "hyderabad";

capitalize = (sampleStr) => {
    for(let i =0;i<sampleStr.length;i++){
      
        sampleStr =  sampleStr.replace(sampleStr[0],sampleStr[0].toUpperCase()) ;
        
    }
    return sampleStr;
    
}

console.log(capitalize(sampleStr));
