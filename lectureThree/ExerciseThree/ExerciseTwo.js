console.log(isEven(50));

function isEven(x) {
  if (x === 1) {
    return "True";
  }
  else if (x === 0) {
    return "False";
  }
  else if (x === -1) {
    return "False";
  }
  else if (x < -1) {
    return isEven(x + 2);
  }
  else {
    return isEven(x - 2);
  }
}