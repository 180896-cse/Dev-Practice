// common Variables.
let BtnFeature = document.getElementsByClassName('m-2 btn');
let inptFld = document.getElementById('fld1');
let inptFld2 = document.getElementById('fld2');
let jmboTxt = document.getElementById('warn');






//Event-listner for COMMON behaviour of all buttons
BtnFeature[0].addEventListener("click", () => {
    let a = document.getElementsByClassName('m-2 btn')[0].innerText;
    inptFld.style.backgroundColor = 'grey';
    inptFld.value = a + " clicked!";
});



BtnFeature[1].addEventListener("click", () => {
    let a = document.getElementsByClassName('m-2 btn')[1].innerText;
    inptFld.style.backgroundColor = 'grey';
    inptFld.value = a + " clicked!";
});


BtnFeature[2].addEventListener("click", () => {
    let a = document.getElementsByClassName('m-2 btn')[2].innerText;
    inptFld.style.backgroundColor = 'grey';
    inptFld.value = a + " clicked!";
});











// Feature specific for First Button 

BtnFeature[0].addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#ffccff";
    let newTxtFld = document.createElement("input");
})
BtnFeature[0].addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "white";
    let newTxtFld = document.createElement("input");
})


// Feature specific for Second Button 
BtnFeature[1].addEventListener("focus", () => {
    BtnFeature[1].classList.remove("btn-info");
    BtnFeature[1].classList.add("btn-danger");
})

BtnFeature[1].addEventListener("blur", () => {
    BtnFeature[1].classList.remove("btn-danger");
    BtnFeature[1].classList.add("btn-info");

})



// Feature specific for Third Button 
BtnFeature[2].addEventListener("click", () => {
    let a = document.location.reload();
})




// Feature specific for input Fld 
inptFld.addEventListener("input", () => {
    jmboTxt.innerText = inptFld.value;
})



// Feature specific for Second input Fld 
inptFld2.style.backgroundColor = "#ffcccc";
inptFld2.addEventListener("copy", () => {
    jmboTxt.innerText = "You have Copied the data!";
    jmboTxt.style.color = "red";
})







