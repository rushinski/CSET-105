const arr = new Array(3); //Creates an array then makes three blank slots in the array
console.log(arr.fill(10)); //Fills the three blank slots in the array with 10

/* 
let arr = [];    prints []

You can not use fill in an array like this because there is not any spots in the array it is just empty, you can define the spots in the array with "," as
many times as you want to add elements into it.  This array's length would be 0.

const arr = new Array(3);   prints [ <3 empty items> ]

If you create the array as an object notation you can define how many spots the array will have before any elements are actually in it.. This arrays length
would be 3.

Using the two types of arrays is situational and should be used depending on your problem, for issues like this making the array as an object is better
practice then just putting 3 commas.
*/