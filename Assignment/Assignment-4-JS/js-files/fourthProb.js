let employeUname = document.getElementById("username");
let employePass = document.getElementById("password");
let lgnBtn = document.getElementById("sbmtBtn");
let rgstrBtn = document.getElementById("register-link");


window.localStorage.setItem("qwert","het");
window.localStorage.setItem("elemObj","teh");


let newElem = window.localStorage.getItem("elemObj");

console.log(localStorage.length);


//getting all the elments from localstorage
for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i)+" "+localStorage.getItem(localStorage.key(i)));
}


lgnBtn.addEventListener("click",()=>{
    console.log("LogIn Button Clicked!");
    if(localStorage.getItem(employeUname.value) != null){
        console.log("yes!");
    }
    else{
        alert("Please Register Username First!");
    }
    
    
})


rgstrBtn.addEventListener("click",()=>{
    console.log("Register Button Clicked!");
    if(employePass.value == ""){
        alert("Please Provide Password");
    }else{
        console.log("the value of password block is not null");
    }

})

if(localStorage.getItem('elemObj') != null){
    console.log("yes!")
}
else{
    console.log("no!");
}


