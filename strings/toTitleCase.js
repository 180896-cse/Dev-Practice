// Given an input string, returns a copy of the string in title case.


let str = "wElCoMe to THE wILD wiLD WEST";

ttlCase = (str) => {
    for(let i=0;i<str.length;i++){
       if(i==0){
        str = str.replace(str[i],str[i].toUpperCase());
       }
        else if(str[i]==" "){
        str = str.replace(str[i+1],str[i+1].toUpperCase());
       }
    }
    return str;
}

console.log(ttlCase(str));