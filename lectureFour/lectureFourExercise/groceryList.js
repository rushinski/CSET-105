const prompt = require('prompt-sync')(); 

let arrayList = [];

console.log("Welcome to Your Grocery List, enter in what you would like to do the options are listed below:");

while (true) {
  console.log("----------------------\nAdd Item\nRemove Item\nSearch Grocery List\nPrint List\nExit Program\n----------------------");
  let selection = prompt("Input your selection : ").toLowerCase();
  
  while (selection !== "add item" && selection !== "remove item" && selection !== "search grocery list" && selection !== "print list" && selection !== "exit program") {
    selection = prompt("Input is character & space sensitive, INPUT A VALID SELECTION : ").toLowerCase();
  }
  
  switch (selection) {
    case "add item":
      addItem();
      break;
    case "remove item":
      removeItem();
      break;
    case "search grocery list":
      searchItem();
      break;
    case "print list":
      printList();
      break;
    case "exit program":
      return false;
  }
}

function addItem () {
  while (true) {
    console.log("----------------------")
    let add = prompt("What item would you like to add to your list? : ").toLowerCase();
    let check = arrayList.indexOf(add, 0)
    
    switch (check) {
      case -1:
        console.log(`${add} not found on list, ${add} will be added to list,\nAdding item to list...\n${add} added successfully!`);
        arrayList.push(add);
        break;
      default:
        console.log(add, " is already present on list!");
        break;
    }
  
    let again = prompt("Would you like to add another item to your list? (yes or no) : ").toLowerCase();
    while (again !== "yes" && again !== "no") {
      again = prompt("Input is character & space sensitive, INPUT A VALID SELECTION (yes or no) : ").toLowerCase();
    }
  
    if (again === "no") {
      return false;
    }
  }
}

function removeItem () {
  while (true) {
    console.log("----------------------")
    let remove = prompt("What item would you like to remove from your list? : ").toLowerCase();
    let check = arrayList.indexOf(remove, 0)
    
    switch (check) {
      case -1:
        console.log(`${remove} does not exist...`);
        break;
      default:
        console.log(`${remove} is present on this list,\nRemoving ${remove}...\n${remove} removed successfully!`);
        arrayList.splice(check, check)
        break;
    }
  
    let again = prompt("Would you like to remove another item from your list? (yes or no) : ").toLowerCase();
    while (again !== "yes" && again !== "no") {
      again = prompt("Input is character & space sensitive, INPUT A VALID SELECTION (yes or no) : ").toLowerCase();
    }
  
    if (again === "no") {
      return false;
    }
  }
}

function searchItem () {
  while (true) {
    console.log("----------------------")
    let search = prompt("What item would you like to search for from your list? : ").toLowerCase();
    let check = arrayList.indexOf(search, 0)
    
    switch (check) {
      case -1:
        console.log(`${search} is not present on your list...`);
        break;
      default:
        console.log(`${search} is present on your list at "${check + 1}".`);
        break;
    }
  
    let again = prompt("Would you like to search for another item on your list? (yes or no) : ").toLowerCase();
    while (again !== "yes" && again !== "no") {
      again = prompt("Input is character & space sensitive, INPUT A VALID SELECTION (yes or no) : ").toLowerCase();
    }
  
    if (again === "no") {
      return false;
    }
  }
}

function printList () {
  console.log("----------------------")
  console.log("Here is your grocery list! : ");
  for (let i = 0; i < arrayList.length; i++) {
    console.log(`${i + 1}. ${arrayList[i]}`);
  }
  prompt("Hit enter to return to the selection menu!");
}