"use strict"; 

window.onload = init; 

let n1, n2; // Define variables outside the function scope to make them accessible across functions

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
    n1 = Number(document.getElementById("number1Field").value); // Assign values to n1 and n2
    n2 = Number(document.getElementById("number2Field").value);
}

function displayResult(result) {
    document.getElementById("result").value = result; // Use .value instead of .innerText for input fields
}

function onAddBtnClicked() { 
    grabData(); // Call grabData to get the values of n1 and n2
    const result = n1 + n2;
    displayResult(result); // Display the result
} 

function onSubtractBtnClicked() { 
    grabData(); 
    const result = n1 - n2;
    displayResult(result);
} 

function onMultiplyBtnClicked() { 
    grabData(); 
    const result = n1 * n2;
    displayResult(result);
} 

function onDivideBtnClicked() { 
    grabData(); 
    if (n2 === 0) {
        displayResult("Cannot divide by zero");
    } else {
        const result = n1 / n2;
        displayResult(result);
    }
} 
