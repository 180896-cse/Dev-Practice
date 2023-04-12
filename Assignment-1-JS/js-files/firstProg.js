//Event-listner for common behaviour of all buttons

let cmmnBtnFeature = document.getElementsByClassName('m-2 btn');

cmmnBtnFeature[0].addEventListener("click",()=>{
    let a = document.getElementsByClassName('m-2 btn')[0].innerText;
    document.getElementById('fld1').style.backgroundColor='grey';
    document.getElementById('fld1').value = a +" clicked!";
});



cmmnBtnFeature[1].addEventListener("click",()=>{
    let a = document.getElementsByClassName('m-2 btn')[1].innerText;
    document.getElementById('fld1').style.backgroundColor='grey';
    document.getElementById('fld1').value = a +" clicked!";
});


cmmnBtnFeature[2].addEventListener("click",()=>{
    let a = document.getElementsByClassName('m-2 btn')[2].innerText;
    document.getElementById('fld1').style.backgroundColor='grey';
    document.getElementById('fld1').value = a +" clicked!";
});

cmmnBtnFeature[3].addEventListener("click",()=>{
    let a = document.getElementsByClassName('m-2 btn')[3].innerText;
    document.getElementById('fld1').style.backgroundColor='grey';
    document.getElementById('fld1').value = a +" clicked!";
});

cmmnBtnFeature[4].addEventListener("click",()=>{
    let a = document.getElementsByClassName('m-2 btn')[4].innerText;
    document.getElementById('fld1').style.backgroundColor='grey';
    document.getElementById('fld1').value = a +" clicked!";
});


// Feature specific for Individual Button 












// //eventListner
// btnSelctor_obj.addEventListener("click", () =>{
//     document.body.style.backgroundColor = "aqua"
// });
