
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




    function grabData() {
        let myNumber = Number(document.getElementById("mynumber").value);
        let myNumber2 = Number(document.getElementById("mynumber2").value);
        alert(myNumber2);
        return [myNumber, myNumber2]
    }
    
    function DisplayData(_result) {
        document.getElementById("result").innerHTML =
        "<h1><span class='bold-large'>" + _result + "</h1></span>";
    }
    function buttonAdd() {
      // This stores the data as a string of text
    
      //The text of the input will be stored in the variable myNumber and then displayed in the alert
     let numbers = grabData();

    
      let result = myNumber + myNumber2;
      alert(result);
      //Display it in element, on the screen so we use innerhtml
      DisplayData(result);
    }
    




    function calculateMortgage(P, annualRate, L_years) {
        let L_months = L_years * 12; // Convert loan length from years to months
        let i_monthly = annualRate / 12; // Convert annual interest rate to a monthly rate
    
        // Calculate monthly payment
        let monthlyPayment = P * (i_monthly / (1 - Math.pow((1 + i_monthly), -L_months)));
    
        return monthlyPayment;
    }
    
    // Example usage:
    let principal = 200000; // Principal amount ($200,000)
    let annualRate = 0.05; // Annual interest rate (5%)
    let loanLengthYears = 30; // Length of the loan in years (30 years)
    
    let monthlyPayment = calculateMortgage(principal, annualRate, loanLengthYears);
    console.log("Monthly Payment: $" + monthlyPayment.toFixed(2));