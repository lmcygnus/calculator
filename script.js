let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function operate (num1, operator, num2) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "x") return num1 * num2;
    if (operator === "/") return num1 / num2;
}

function moreOps() {
    if(num1 !== "" && operator !== "" && display2.textContent !== ""){
        num2 = Number(display2.textContent);
        roundResult(operate(num1, operator, num2));
        display2.textContent = operate(num1, operator, num2);
    }
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function clearAllnum() {
    num1 = "";
    num2 = "";
    num3 = "";
    operator = "";
    display1.textContent = "";
    display2.textContent = "";
}

function noPress() {
    if(display2.textContent == ""){
        display2.textContent = null;
    }
}

const display1 = document.querySelector(".a")
const display2 = document.querySelector(".b")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const isEqual = document.querySelector(".isEqual")
const deleteNum = document.querySelector(".delete")
const clearAll = document.querySelector(".clear")
const dot = document.querySelector(".dot")

numbers.forEach((number) => {number.addEventListener("click", () => {
    display2.textContent += number.textContent;
})})

operators.forEach((op) => {op.addEventListener("click", () => {
    moreOps();
    num1 = Number(display2.textContent);
    display1.textContent = display2.textContent;
    operator = op.textContent;
    display1.textContent += " " + op.textContent + " ";
    display2.textContent = "";
})})

isEqual.addEventListener("click", () => {
    noPress();
    num2 = Number(display2.textContent);
    let result = roundResult(operate(num1, operator, num2));
    if(operator === "/" && num2 === 0){result = "∞";}
    display1.textContent += display2.textContent;
    display2.textContent = result;
})

deleteNum.addEventListener("click", () => {
    display2.textContent = display2.textContent.toString().slice(0, -1)
})

clearAll.addEventListener("click", clearAllnum)

dot.addEventListener("click", () => {
    if(display2.textContent.includes(".")) return;
    display2.textContent += dot.textContent;
})
