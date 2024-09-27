function removeEven(...array) {
  let odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  console.log(odds);
}
removeEven(3, 5, 7);