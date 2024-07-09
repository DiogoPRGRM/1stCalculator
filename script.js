const display = document.querySelector("#display");
const allButtons = document.querySelectorAll(".allButtons");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttonEqual = document.querySelector("#buttonEqual")
const buttonClear = document.querySelector("#buttonClear").addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    result = 0;});

let displayValue = "";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;

numbers.forEach(number => number.addEventListener("click", (e) => {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    if (operator === ""){return firstNumber = parseInt(displayValue)}
    else {return secondNumber = parseInt(displayValue)}
}));

operators.forEach(operation => operation.addEventListener("click", (e) => {
    displayValue = "";
    accumulator = result;
    if (operator === ""){
        return operator = e.target.innerText;}
        
    if(operator !== ""){
        display.textContent = result;
    if (operator === "+"){
        operator = e.target.innerText
        result = (accumulator ||firstNumber) + secondNumber;       
        return display.textContent = result}
    if (operator === "-"){
        operator = e.target.innerText
        result = (accumulator ||firstNumber) - secondNumber;       
        return display.textContent = result}
    if (operator === "*"){
        operator = e.target.innerText
        result = (accumulator ||firstNumber) * secondNumber;        
        return display.textContent = result}
    if (operator === "/"){
        operator = e.target.innerText
        result = (accumulator ||firstNumber) / secondNumber;
        return display.textContent = result}
 }
}
));

buttonEqual.addEventListener("click", () => {
    displayValue ="";
    accumulator = result;
    if (operator === "+"){result = (accumulator ||firstNumber) + secondNumber;       
    return display.textContent = result}
    if (operator === "-"){result = (accumulator ||firstNumber) - secondNumber;       
    return display.textContent = result}
    if (operator === "*"){result = (accumulator ||firstNumber) * secondNumber;        
    return display.textContent = result}
    if (operator === "/"){result = (accumulator ||firstNumber) / secondNumber;
    return display.textContent = result}
});