// Given an input string and positive integer N, returns a ROT-N
// copy of the string.

// NOTE: the value 65 is A, the same way to print B, we need to pass the value of 66 and so on. Therefore, to print A to Z, all we have to do is to pass the value from 65 to 91. And, for small letters, it will be 97 to 123

let str = "Hello world";
let n = 13;


rotN = (str,n) =>{
   let temp=0;
    for(let i =0;i<str.length;i++){
       if(str[i]==" "){
        continue;
       }
       else{
        temp =0;
        temp = str.charCodeAt(i);
        temp = temp+n;
        str = str.replace(str[i] ,String.fromCharCode(temp));
        console.log(temp+" : "+str[i]);
       }
    }
    return str;
    
}
console.log(rotN(str,n));