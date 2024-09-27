let arrayName = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //setting the values in the array
let len = arrayName.length // gets the arrays length

//longer loop to print full array

for (let i = 0; i < len; i++) {
  console.log(arrayName[i]);
}

//shorter loops to print full array

for (let i of arrayName) { //prints the value of arrayName
  console.log(i);
}

for (let i in arrayName) { //prints the index length of arrayName
  console.log(i);
}


