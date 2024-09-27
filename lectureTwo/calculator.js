const prompt = require('prompt-sync')();

console.log("Please enter a corresponding number to select your calculation choice:");
console.log("Press 1 to add: ");
console.log("Press 2 to subtract: ");
console.log("Press 3 to multiply: ");
console.log("Press 4 to divide: ");
console.log("Press 5 to quit: ");
let choice = Number(prompt("Enter in your choice..."));

while (choice < 1 || choice > 5 || choice != Number(choice)) {
  console.log("Please enter a VALID corresponding number to select your calculation choice:");
  console.log("Press 1 to add: ");
  console.log("Press 2 to subtract: ");
  console.log("Press 3 to multiply: ");
  console.log("Press 4 to divide: ");
  console.log("Press 5 to quit: ");
  choice = prompt("Enter in your choice...")
}

if (choice <= 4) {
  let num1 = Number(prompt("Enter in your first number: "));
  while (num1 != Number(num1)) {
    num1 = Number(prompt("Enter in a first VALID number: "));
  }
  let num2 = Number(prompt("Enter in your second number: "));
  while (num2 != Number(num2)) {
    num2 = Number(prompt("Enter in a second VALID number: "));
  }
  let ans = 0; 

  if (choice == 1) {
    ans = num1 + num2;
    console.log(`Your number is ${ans}`);
  }
  else if (choice == 2) {
    ans = num1 - num2;
    console.log(`Your number is ${ans}`);
  }
  else if (choice == 3) {
    ans = num1 * num2;
    console.log(`Your number is ${ans}`);
  }
  else if (choice == 4) {
    ans = num1 / num2;
    console.log(`Your number is ${ans}`);
  }
}
else if (choice == 5) {
  console.log("Program Closed...");
}
