// Given an array, returns the largest element in the array.

let arr = [0, -100, 50, -200];
let temp = -1000000;
lrgstKey = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
        if (temp<arr[i]) {
            temp = arr[i];
            
        }
    }
    return temp;
}
let lgst = lrgstKey(arr);
console.log("largest value of array:"+lgst);