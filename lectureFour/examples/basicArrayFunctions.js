let arrayList = [ ];
arrayList.push("hello"); //adds item to end of the array
arrayList.unshift("Mat") //adds item to beginning of array
arrayList.pop() //removes last item of the array
arrayList.shift() //removes first item of the array
arrayList.indexOf("eggs", 0) //looks for the index value of "eggs" 0 is the index in which the search begins. If "-1" is returned it means item does not exist

console.log(arrayList);