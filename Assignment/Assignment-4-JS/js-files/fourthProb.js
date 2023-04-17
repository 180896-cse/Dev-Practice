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
        console.log("Username present in LoaclStorage!");
    }
    else{
        alert("Please Register Username First!");
    }
    
    
})


rgstrBtn.addEventListener("click",()=>{
    console.log("Register Button Clicked!");
    if(employePass.value == "" || employeUname.value == ""){
        alert("Username/Password field cannot be blank!");
    }else{
        if(localStorage.getItem(employeUname.value) != null){
            alert("Please try with other UserName");
        }
        else{
        window.localStorage.setItem(employeUname.value,employePass.value);
        }
    }

})







if(localStorage.getItem('elemObj') != null){
    console.log("yes!")
}
else{
    console.log("no!");
}


