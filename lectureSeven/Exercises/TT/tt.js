function table() {
  let x = prompt("Please input what number for the multiplication table. ");
  let a = prompt("Where should the table start? ");
  let b = prompt("Where should the table end? ");
  if (isNaN(x)||isNaN(a)||isNaN(b)) {
    console.log("Invalid Input");
  }
  if (a<b) {
    for (let index=a;index<=b;index++) {
      let num = x * index;
      let ele = document.createElement("p");
      ele.innerHTML = (`${x} x ${index} = ${num}`);
      document.body.appendChild(ele);
    }
  } else {
    console.log("Invalid Input");
  }
}