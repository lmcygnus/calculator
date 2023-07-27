function add(a, b){
    return a + b;
}
function substrac (a, b){
    return a - b ;
}
function multiply (a, b){
    return a * b;
 }
function divide (a, b){
    return a / b;
  }

function operate (num1, operator, num2) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return substrac(num1, num2);
    if (operator === "x") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}

const numA = document.querySelector(".a")
const numB = document.querySelector(".b")
const opr = document.querySelector(".op")
const display = document.querySelector(".result")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const isEqual = document.querySelector(".isEqual")
const deleteNum = document.querySelector(".delete")


numbers.forEach((number) => {number.addEventListener("click", () => {
    display.innerText += number.textContent;
})})

operators.forEach((op) => {op.addEventListener("click", () => {
    opr.innerText = op.textContent
    numA.innerText = display.textContent;
    display.innerText = "";
})})

isEqual.addEventListener("click", () => {
    let num1 = Number(numA.textContent);
    let num2 = Number(display.textContent);
    let operator = opr.textContent;
    numB.innerText = num2;
    display.innerText = "";
    let result = (operate(num1, operator, num2));
    display.innerText = result;
})

deleteNum.addEventListener("click", () => {
    let newNum = display.textContent.toString().slice(0, -1)
    display.innerText = newNum;
    if(display.textContent === ""){
        opr.textContent = "";
        numA.textContent = "";
        numB.textContent = "";
    }
})
