// Given two arrays, returns a new array that is a concatenation of the
// two given arrays.



let firstArr = [1,2,3];
let secondArr = [4,5,6];

arrayConcat = (firstArr,secondArr) => {
    for(let i=0;i<secondArr.length;++i){
        firstArr.push(secondArr[i]); 
    }
    return firstArr;
}
let finalArr = arrayConcat(firstArr,secondArr);
console.log(finalArr);