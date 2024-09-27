const prompt = require('prompt-sync')();

let x = inputNumber();
let y = inputNumber();

console.log(`${x}^2 - ${y}^2 = ${(x * x) - (y * y)}`);

function inputNumber() {
  let num = Number(prompt("Enter in a number: "));
  while (isNaN(num)) {
    num = Number(prompt("Enter in a VALID number: "));
  }

  console.log("Thank you!");

  return num;
}

