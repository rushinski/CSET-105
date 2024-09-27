const prompt = require('prompt-sync')(); 

let array = [1, 2, 5, 6, 4, 10];
let input = Number(prompt("Input the INDEX of the array you would like to remove: "));

array.splice(input, input);

console.log(array);