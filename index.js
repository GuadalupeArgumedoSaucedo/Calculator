"use strict"; 

window.onload = init; 

function init() { 
    const addBtn = document.getElementById("addBtn"); 
    addBtn.onclick = onAddBtnClicked ;  

    const subtractBtn = document.getElementById("subtractBtn"); 
    subtractBtn.onclick = onSubtractBtnClicked ;  

    const multiplyBtn = document.getElementById("multiplyBtn"); 
    multiplyBtn.onclick = onMultiplyBtnClicked ; 

    const divideBtn = document.getElementById("divideBtn"); 
    divideBtn.onclick = onDivideBtnClicked ;  
    } 


function grabData(){
const n1 = Number (document.getElementById("number1Field").value);
const n2 = Number (document.getElementById("number2Field").value);
}


function DisplayData(_result){
    document.getElementById{"result"}.innerHTML =_result
}

function onAddBtnClicked() { 
    const result = n1 + n2;   
     } 

function onSubtractBtnClicked() { 
    const result = n1 - n2;
    } 

function onMultiplyBtnClicked() { 
    const result = n1 * n2;
    } 

function onDivideBtnClicked() { 
    const result = n1 / n2;
    } 

function displayResult(result) {
    document.getElementById("result").innerText = result;
    }
    