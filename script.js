
let firstNum = "";
let secondNum = "";
let operator = "";
let operatorPressed = false;

const numBtns = document.querySelectorAll(".numBtn");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equalsBtn");
const clearBtn = document.querySelector(".clearBtn");
const display = document.querySelector(".display");

function add(a,b){
    let sum = Number(a)+Number(b);
    return sum.toString();
}

function subtract(a,b){
    let sum = Number(a)-Number(b);
    return sum.toString();
}

function multiply(a,b){
    let sum = Number(a)*Number(b);
    return sum.toString();
}

function divide(a,b){
    let sum = Number(a)/Number(b);
    return sum.toString();
}

function operate(a, b, op)
{
    switch(op)
    {
        case "+":
            firstNum = (add(a,b));
            UpdateDisplay(firstNum);
            break;
        case "-":
            firstNum = (subtract(a,b));
            UpdateDisplay(firstNum);
            break;
        case "*":
            firstNum = (multiply(a,b));
            UpdateDisplay(firstNum);
            break;
        case "/":
            firstNum = (divide(a,b));
            UpdateDisplay(firstNum);
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

function UpdateDisplay(string){
    display.textContent = string;
}

function SetOperator(op)
{
    operator = op;
    secondNum = "";
    if(firstNum != "0")
    {
        operatorPressed = true;
    }
}

function Equals()
{
    if(firstNum, secondNum == "")
    {
        console.log("Equals Error");
    }
    else
    {
        operate(firstNum, secondNum, operator)
    }
}

function Clear()
{
    firstNum = "";
    secondNum = "";
    operatorPressed = false;
    UpdateDisplay("");
}

// Button Setup Functions
function SetUpOperatorBtns() {
    for(let i = 0; i < operatorBtns.length; i++)
    {
        operatorBtns[i].addEventListener("click", () => SetOperator(operatorBtns[i].textContent));
    }
}

function SetUpNumBtns() {
    for(let i = 0; i < numBtns.length; i++)
    {
        numBtns[i].addEventListener("click", () => UpdateNumVariables(numBtns[i].textContent));
    }
}

function SetUpEqualsBtn()
{
    equalsBtn.addEventListener("click", Equals);
}

function SetUpClearBtn() {
    clearBtn.addEventListener("click", Clear);
}

// Start Function
function StartFunction()
{
    SetUpNumBtns();
    SetUpOperatorBtns();
    SetUpClearBtn();
    SetUpEqualsBtn();
}

StartFunction();