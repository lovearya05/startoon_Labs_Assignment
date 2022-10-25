const progress = document.querySelector(".progress-done")
const input = document.querySelector(".input")
const maxInput = document.querySelector(".maxInput")

let finalValue = 0;
let max = 0;

const changeHeight = ()=>{
    progress.style.height = `${(100-(finalValue/max)*100)}%`
}

input.addEventListener("keyup", ()=>{
    ipv = parseInt(input.value, 10)
    mipv = parseInt(maxInput.value, 10)
    
    if(ipv>mipv){
        console.log(ipv, mipv);
        alert("input value is greater than the max value")
    } 

    finalValue = parseInt(input.value, 10)
    changeHeight();
});


maxInput.addEventListener("keyup", ()=>{
    max = parseInt(maxInput.value, 10)
    changeHeight();
} );