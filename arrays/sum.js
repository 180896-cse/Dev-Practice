// Given an array of numbers, return their sum.


let arr = [-10, 10];
let sum =0;
totalsum = (arr) =>{
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
return sum;
}

console.log(totalsum(arr));