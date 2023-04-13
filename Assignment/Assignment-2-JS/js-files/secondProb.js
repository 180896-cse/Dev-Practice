let tempSrcValue = "";
let btns = document.getElementsByTagName('button');
let outputVal = document.getElementById('outputScrn');


for (btn of btns ){
    btn.addEventListener("click",(event)=>{
        console.log(event.target.innerText);
        btntxt = event.target.innerText;

        if(btntxt == "x"){
            btntxt = "*";
            tempSrcValue += btntxt;
            outputVal.value = tempSrcValue; 
        }
        else if(btntxt == "C"){
            tempSrcValue = ""
            outputVal.value = tempSrcValue;

        }
        else if(btntxt == "="){
            outputVal.value = eval(outputVal.value)
            console.log(outputVal.value);
        }
        else{
            tempSrcValue += btntxt;
            outputVal.value = tempSrcValue;

        }
    })
}



