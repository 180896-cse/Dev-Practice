let arr = [1, 2, -3, 4, 5];

isAllPositive = (arr) =>{
    let temp = false;
    for(let i =0;i<arr.length;i++){
        if(arr[i]<0){
            temp = false;
            break;
        }
        else{
            temp = true;
        }
    }
    return temp;
}

let ans = isAllPositive(arr);
console.log(ans);