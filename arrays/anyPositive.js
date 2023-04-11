// Given an array of numbers, returns true if _any_ element is positive
// and false otherwise.

let arr = [-10, -10, 1]
let temp = false;

anyElePositive = (arr) => {
    
    for(let i =0;i<arr.length;i++){
        if(arr[i]>0){
            temp = true;
        }

    }
return temp;
}
let ans = anyElePositive(arr);
console.log(ans);