
let arr = [1, 2, 3, 4, 5];
let thsoldno = 2;
let count = 0;
countGreaterThan = (arr,thsoldno) => {
    for(let i= 0;i<arr.length;i++){
        if(arr[i]>thsoldno){
            count+=1;
        }
    }
    return count;
}

countGreaterThan(arr,thsoldno);
console.log(count);