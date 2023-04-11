
// Given an array of integers, returns the count of even integers in the array.

let arr = [1, 2, 3, 4, 5];
let ans = 0 ;
countEven = (arr) => {
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            ans = ans+1;
        }
    }
    return ans;
}
countEven(arr);
console.log(ans);