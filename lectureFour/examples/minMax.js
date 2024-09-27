//max

function max(...numbers) { // Creates the function and "..." allows a fluid ammount of numbers to be stored in "numbers"
  let result = -Infinity; // Creates a "result" variable that = - Infinity
  for (let number of numbers) { // This will loop as many times as there is numbers in "numbers"
    if (number > result) { // If number is greater than result that number then equals result
      result = number; // When looping through this the highest number will always be stored in result because it looks through all the numbers in number
    }
  }
  return result; // This sends result back to the function so that its new value is known
}

console.log(max(2, 3, 5, 1)); // Sends numbers to function

//min

function min(...numbers) {
  let result = Infinity;
  for (let number of numbers) {
    if (number < result) {
      result = number;
    }
  }
  return result;
}

console.log(min(1, 2, 0, -1));

/* you can call an array in a function using max(...x); max is the function name and x is the array name, the ... lets the function get as many
variables as given */