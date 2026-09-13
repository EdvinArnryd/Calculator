
let firstNum = 0;
let secondNum = 0;
let operator = "";

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