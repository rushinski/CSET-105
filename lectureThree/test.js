const prompt = require('prompt-sync')();

function table(){
  while(true){
      let x=Number(prompt("Please input what number for the multiplication table. "));
      let a=Number(prompt("Where should the table start? "));
      let b=Number(prompt("Where should the table end? "));
      if (isNaN(x) || isNaN(a) || isNaN(b)){
          console.log("Invalid Input");
          break;
      }
      if(a<b){
          for(let index=a;index<=b;index++){
              let num=x*index;
              console.log(`${x} x ${index} = ${num}`);
              }
      }else{
          console.log("Invalid Input");
      }
  }
}

function tableTwo() {
  while(true){
    let x=Number(prompt("Please input what number for the multiplication table to start at. "));
    let y=Number(prompt("Please input what number for the multiplication table to end at. "));
    let a=Number(prompt("Where should the table start? "));
    let b=Number(prompt("Where should the table end? "));
    if (isNaN(x) || isNaN(a) || isNaN(b) || isNaN(y)){
        console.log("Invalid Input");
        break;
    }

    
  }
}
console.log(table());