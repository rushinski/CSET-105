function check(arr, check) {
  for (let i = 0; i < arr.length; i++) {
    if (check === arr[i]) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}
check([1, 2, 3, 4, 5], 5);
