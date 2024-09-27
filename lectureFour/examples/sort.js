const fruits = [ 100, 40, 60, 800 ];
fruits.reverse() //Puts from Z to A
fruits.sort(num); //Puts from A to Z

console.log(fruits);
//issue, sort looks at only the first number/letter so for example 100 would be put before 40 well sorting because 1 is less than 4

function num (a, b) { //fix to issue, make sure to call function name in "()" for it to work
  return a-b;
}