(function () {
   "use strict";

   let plus = document.getElementById("plus");
   let minus = document.getElementById("minus");
   let multiply = document.getElementById("multiply");
   let divide = document.getElementById("divide");
   let remainder = document.getElementById("remainder");
   let num1 = document.getElementById("num1");
   let num2 = document.getElementById("num2");
   let output = document.getElementById("output");

   function calculate(operation) {
      if (num1.value !== "" && num2.value !== "") {
         output.innerHTML = (eval(`${num1.value} ${operation}  ${num2.value}`));
      } else {
         alert("Enter correct parameters");
      }
   };

   plus.addEventListener("click", () => calculate('+'));

   minus.addEventListener("click", () => calculate('-'));

   multiply.addEventListener("click", () => calculate('*'));

   divide.addEventListener("click", () => calculate('/'));

   remainder.addEventListener("click", () => calculate('%'));
})()