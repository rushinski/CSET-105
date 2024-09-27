const prompt = require('prompt-sync')();

console.log("In this program you will be entering two numbers that will be squared and then subtracted from eachother,");
let num1 = Number(prompt("Enter in your first number: "));
while (isNaN(num1)) {
  num1 = Number(prompt("Enter in a VALID first number: "))
}

console.log("Thank you!");

let num2 = Number(prompt("Enter in your second number: "));
while (isNaN(num2)) {
  num2 = Number(prompt("Enter in a VALID first number: "));
}

console.log("Thank you!");

console.log(`${num1}^2 - ${num2}^2 = ${(num1 * num1) - (num2 * num2)}`);

