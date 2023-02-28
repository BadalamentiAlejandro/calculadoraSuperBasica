
let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")

let sumEl = document.getElementById("sum-el");




function add() {
  let add = parseInt(num1.value) + parseInt(num2.value)
  sumEl.textContent = "Sum: " + add;
}

function subtract() {
  let subtract = parseInt(num1.value) - parseInt(num2.value)
  sumEl.textContent = "Sum: " + subtract
}

function divide() {
  let divide = parseInt(num1.value) / parseInt(num2.value)
  sumEl.textContent = "Sum: " + divide
}

function multiply() {
  let multiply = parseInt(num1.value) * parseInt(num2.value)
  sumEl.textContent = "Sum: " + multiply
}