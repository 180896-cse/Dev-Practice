// Given a arrays and a key, returns count of the key in array.


let arr = [1, 2, 1, 2, 3, 4, 1, 2, 1];
let key = 1;
let count =0;
countValue = (arr,key) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            count +=1;
        }
    }

    return count;
}

countValue(arr,key);
console.log(count);