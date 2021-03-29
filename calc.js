"use strict";

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let remainder = document.getElementById("remainder");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let output = document.getElementById("output");

plus.addEventListener("click", () => {
   if (num1.value !== "" && num2.value !== "") {
      output.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
   } else {
      alert("Enter second number");
   }
});

minus.addEventListener("click", () => {
   if (num1.value !== "" && num2.value !== "") {
      output.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
   } else {
      alert("Enter second number");
   }
});

multiply.addEventListener("click", () => {
   if (num1.value !== "" && num2.value !== "") {
      output.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
   } else {
      alert("Enter second number");
   }
});

divide.addEventListener("click", () => {
   if (num1.value !== "" && num2.value !== "") {
      output.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
   } else {
      alert("Enter second number");
   }
});

remainder.addEventListener("click", () => {
   if (num1.value !== "" && num2.value !== "") {
      output.innerHTML = parseFloat(num1.value) % parseFloat(num2.value);
   } else {
      alert("Enter second number");
   }
});
