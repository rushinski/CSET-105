let dim = [
  [1, 2],
  [9, 0],
  [2, 4]
];

for (let i of dim) { //print whole array shorter
  console.log(i);
}

for (let i = 0; i < dim.length; i++) { //prints whole array longer
  console.log(dim[i])
}

console.log(dim[0]); //prints specific index of array

console.log(dim[0][1]); //prints specific index and then prints specific index of that index

