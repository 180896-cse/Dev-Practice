// Given a non-negative integer, returns its factorial.

let n = 5;
factorial = (n) => {
    let temp=0;
    for(let i=1;i<n;i++){
        if(i==1){
            temp = i*(i+1);
        }
        else{temp = temp*(i+1);} 
        console.log(temp);
    }    
}
factorial(n);