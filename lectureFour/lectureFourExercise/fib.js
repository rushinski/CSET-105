const prompt = require('prompt-sync')(); 

let location = Number(prompt("Enter in a location and the program will return what number is in that location of the Fibonacci Sequence: "))
let array = [];

function fib (position) {
  let first = 0;
  let second = 1;
  let third = second + first;

  for (let count = 2; count < position; count++) {
    first = second;
    second = third;
    third = first + second
  }
  array.push(third);
  return third;
}

console.log(fib(location));

