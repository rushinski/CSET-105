const prompt = require("prompt-sync")();

let array = [ 1, 2, 3, 4, 5, 6 ];

let arrayCalculate = array.map(number => number + 30); //Adds 30 to each number in the array.  "=>" is a pointer creating a function

console.log(arrayCalculate);