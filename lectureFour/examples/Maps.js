const fruits = new Map ([ // shorter alternative then using a 2D array
  [ "apples", 500 ],
  [ "bananas", 300 ],
  [ "oranges", 200 ]
]);

fruits.set("apples", 700); // This would update the value of apple
fruits.set("Kiwi", 400); // This would add the new items

console.log(fruits.get("apples")); 
/* This gets a specific value, its getting apple, apple was 500 but now is 700 so it will print 700.  Only the value is printed because your just 
getting the key of the value */ 

console.log(fruits);

console.log(fruits.has("apples")); // If "apples" is in the map true will be returned if not false will

console.log(fruits.size); // Gets the size of the map gives you counted number 

console.log(fruits.clear()); //clears the whole map