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

const n1 = parseFloat(document.getElementById("number1Field").value);
const n2 = parseFloat(document.getElementById("number2Field").value);

function onAddBtnClicked() { 
    const result = Number(n1) + Number(n2);   
     } 

function onSubtractBtnClicked() { 
    const result = Number(n1) - Number(n2);
    } 

function onMultiplyBtnClicked() { 
    const result = Number(n1) * Number(n2);
    } 

function onDivideBtnClicked() { 
    const result = Number(n1) / Number(n2);
    } 

function displayResult(result) {
    document.getElementById("result").innerText = result;
    displayResult(result); 
    }
    