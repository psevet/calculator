let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let remainder = document.getElementById("remainder");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let output = document.getElementById("output");

plus.addEventListener("click", () => {
   output.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
});

minus.addEventListener("click", () => {
   output.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
});

multiply.addEventListener("click", () => {
   output.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
});

divide.addEventListener("click", () => {
   output.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
});

remainder.addEventListener("click", () => {
   output.innerHTML = parseFloat(num1.value) % parseFloat(num2.value);
});
