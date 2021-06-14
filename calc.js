(function () {
   "use strict";

   const plus = document.getElementById("plus");
   const minus = document.getElementById("minus");
   const multiply = document.getElementById("multiply");
   const divide = document.getElementById("divide");
   const remainder = document.getElementById("remainder");
   const m1read = document.getElementById("m1read");
   const m1write = document.getElementById("m1write");
   const m2read = document.getElementById("m2read");
   const m2write = document.getElementById("m2write");
   const num1 = document.getElementById("num1");
   const num2 = document.getElementById("num2");
   const output = document.getElementById("output");

   function validate() {
      return num1.value !== "" && num2.value !== "";
   }

   function add() {
      return parseFloat(num1.value) + parseFloat(num2.value);
   }

   function sub() {
      return num1.value - num2.value;
   }

   function mul() {
      return num1.value * num2.value;
   }

   function div() {
      return num1.value / num2.value;
   }

   function rem() {
      return num1.value % num2.value;
   }

   function calculate(operation) {
      if (validate()) {
         output.innerHTML = operation;
      } else {
         alert('Enter correct parameters')
      }
   }

   let m1 = 0;
   m1write.addEventListener("click", () => m1 = num1.value);
   m1read.addEventListener("click", () => num1.value = m1);

   let m2 = 0;
   m2write.addEventListener("click", () => m2 = num2.value);
   m2read.addEventListener("click", () => num2.value = m2);


   plus.addEventListener("click", () => calculate(add().toFixed(2)));

   minus.addEventListener("click", () => calculate(sub().toFixed(2)));

   multiply.addEventListener("click", () => calculate(mul().toFixed(2)));

   divide.addEventListener("click", () => calculate(div().toFixed(2)));

   remainder.addEventListener("click", () => calculate(rem().toFixed(2)));
})()