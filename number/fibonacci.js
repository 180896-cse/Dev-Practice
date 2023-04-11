// Given a non-negative integer n, returns the n-th Fibonacci numbers.

let number = 4;
let fi =0;
let sec =1, nex;
fibonacci = (number) =>{
   
    
    for(let i=1;i<=number;i++){
        console.log(fi);
        nex = fi+sec;
        fi = sec;
        sec = nex;
        
    }
}

fibonacci(number);