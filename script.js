
let firstNum = "";
let secondNum = "";
let operator = "";
let operatorPressed = false;

const numBtns = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a, b, op)
{
    switch(op)
    {
        case "+":
            console.log(add(a,b));
            break;
        case "-":
            console.log(subtract(a,b));
            break;
        case "*":
            console.log(multiply(a,b));
            break;
        case "/":
            console.log(divide(a,b));
            break;
        default:
            break;
    }
}

function UpdateNumVariables(val){
    if(!operatorPressed)
    {
        firstNum += val;
        UpdateDisplay(firstNum);
    }
    else
    {
        secondNum += val;
        UpdateDisplay(secondNum);
    }
}

function UpdateDisplay(val){
    display.textContent = val;
}

function SetOperator(val)
{
    operator = val;
    if(firstNum != "0")
    {
        operatorPressed = true;
    }
}

function SetUpOperatorBtns() {
    for(let i = 0; i < operators.length; i++)
    {
        operators[i].addEventListener("click", () => SetOperator(operators[i].textContent));
    }
}

function SetUpNumBtns() {
    for(let i = 0; i < numBtns.length; i++)
    {
        numBtns[i].addEventListener("click", () => UpdateNumVariables(numBtns[i].textContent));
    }
}

function StartFunction()
{
    SetUpNumBtns();
    SetUpOperatorBtns();
}

StartFunction();