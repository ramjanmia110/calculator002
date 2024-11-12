let displayValue ="";
let operator =null;
let firstOperend =null;
let secondOperent =null;


let display1 =document.getElementById("display");


function appendNumber(number){
    if(displayValue === "0" && number !== "."){
        display =number;
    }else{
        displayValue += number;
    }

    display.value =displayValue;
    
}


function clearDisplay(){
    displayValue ="";
    operator =null;
    firstOperend =null;
    secondOperent =null;
    display.value ="0"
}

function backspace(){
    displayValue = displayValue.slice(0,-1);
    display.value =displayValue || "0"
}

function appendOperator(op){
    if(displayValue && operator !==""){
        calculate()

    }
    firstOperend =parseFloat(displayValue)
    operator =op;
    displayValue ="";

}

function calculate() {
    if (operator && displayValue !== '') {
        secondOperent = parseFloat(displayValue);
        let result;

        switch (operator) {
            case '+':
                result = firstOperend + secondOperent;
                break;
            case '-':
                result = firstOperend - secondOperent;
                break;
            case '*':
                result = firstOperend * secondOperent;
                break;
            case '/':
                result = firstOperend !== 0 ? firstOperend / secondOperent : 'Error';
                break;
            default:
                return;
        }

        displayValue = result.toString();
        display.value = displayValue;
        operator = null;
        firstOperend = result;
    }
}


 






