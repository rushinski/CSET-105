const prompt = require('prompt-sync')();

let num = Number(prompt('Enter in a number: '));
console.log(test(num));

function test(num) {
  return num * num;
}