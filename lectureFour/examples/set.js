const letters = new Set();

console.log(letters); // Set(0) {}

letters.add("a"); // adds onto set
letters.add("b");

console.log(letters) // Set(2) { 'a', 'b' }

// or to add 

const item = new Set([ "a", "b", "c" ]);

// Set can not have duplicate items ex. can't have "a" twice 

let arr = Array.from(letters); // Converts a set to a array
console.log(arr)   