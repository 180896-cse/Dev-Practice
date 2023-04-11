// Given an array and a value, returns the index of the first occurence of
// the value. If the value is not found, returns -1.

let arr = [10, 40, 30, 20];
let key = 20;
let idx = 0;
firstIndexOf = (arr,key) =>{
        for(let i=0;i<arr.length;i++){
            if(arr[i]==key){
              idx = arr.indexOf(key); 
            }
            else{
                idx = -1;
            }
        }
    return idx;
}

firstIndexOf(arr,key);
console.log(idx);

