
function onAddBtnClicked() { 
    const n1 = parseFloat(document.getElementById("number1Field").value);
    const n2 = parseFloat(document.getElementById("number2Field").value);
    const result = Number(n1) + Number(n2);
    displayResult(result);    
     } 

function onSubtractBtnClicked() { 
    const n1 = parseFloat(document.getElementById("number1Field").value);
    const n2 = parseFloat(document.getElementById("number2Field").value);
    const result = n1 - n2;
    displayResult(Number(result)); 
    } 

function onMultiplyBtnClicked() { 
    const n1 = parseFloat(document.getElementById("number1Field").value);
    const n2 = parseFloat(document.getElementById("number2Field").value);
    const result = n1 * n2;
    displayResult(Number(result)); 
    } 

function onDivideBtnClicked() { 
    const n1 = parseFloat(document.getElementById("number1Field").value);
    const n2 = parseFloat(document.getElementById("number2Field").value);
    const result = n1 / n2;
    displayResult(Number(result)); 
    } 

function displayResult(result) {
    document.getElementById("result").innerText = result;
    }
    