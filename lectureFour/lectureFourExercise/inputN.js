const prompt = require('prompt-sync')(); 

let arrayNumbers = [];
let result = 0;

let numberAmmount = prompt("Input how many numbers you would like to add together: ");

for (let i = 0; i < numberAmmount; i++) {
  let holder = prompt("Enter in a number: ");
  arrayNumbers.push(holder);
  result += Number(arrayNumbers[i]);
}

console.log(result);


