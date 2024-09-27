function ascii(arr) {
  let asciiArray = arr.map(num => ({ [num]: String.fromCharCode(num) }));
  console.log(asciiArray);
}
ascii([119, 120, 121, 122]);