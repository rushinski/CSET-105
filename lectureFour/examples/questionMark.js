let array = [ "Jacob" ];
array.indexOf("Bob", 0) === -1 ? array.push("Bob") : array; 
/* "array.indexOf("Bob", 0)" looks for if "Bob is in the array alredy and it starts looking from the begginning so "index 0".  It checks to see if this = -1,
if it = -1 it means that "Bob" is not in the array.  If that is the case "array.push("Bob")" adds the "Bob" string to the array.  If -1 is not returned that
means that Bob is already in the array so the value of the array just stays the same.

"?" is useful because it saves the repition of else if's*/

for (let i of array) { // This loops through the array and prints out the contents
  console.log(i);
}

