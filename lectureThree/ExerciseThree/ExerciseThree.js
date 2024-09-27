function series1(position){
  let result=2;
  for (let count = 0; count < position; count++){
      result += 4 * count;
  }
  return result;
}
console.log(series1(24));

/*function Fib(index) {
  if (index < 3) {
    return 1;
  }
  return Fib(index - 1) + Fib(index - 2);
}
console.log(Fib(5));*/


