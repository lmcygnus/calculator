const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{ 
    number.addEventListener("click", (e)=> {
        display.innerText = number.textContent
    })
})
const display = document.querySelector(".display")

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
let num1 = 0;
let numb2 = 0;
let operator = document.querySelectorAll(".operator")
 function operate (a, operator, b) {
    if (operator === add){
        return add(a,b)
    }
 }
 console.log(operate(2, add, 2))