// Given a positive integer, return an array consisting of all its factors arranged from smallest to largest.

let number = 12;
let arr = [1];
// console.log(arr.length);
factors = (number) => {
    
    for(let i =1;i<=number;++i){
        if(number%i==0){
          arr.push(i);
        }
    }
    return arr;
}
    arr.shift();
    console.log(factors(number));