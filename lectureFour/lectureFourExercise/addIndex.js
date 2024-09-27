const prompt = require('prompt-sync')(); 

let array = [1, 2, 5, 6, 4, 10];
let add = prompt("Input the value you would like to add: ");
let input = Number(prompt("Input the INDEX of the array of where you would like to add this: "));

array.splice(input, 0, add);
/*First number is where your adding, removing, or replacing. Second number is the index of where you would like to 
start in the array. The third number is what your adding*/

console.log(array);