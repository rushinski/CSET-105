// Gets specific "p" tag
// let para = document.body.getElementsByTagName("p")[1].innerHTML;
// console.log(para);


// Gets specific "id"
// let para = document.getElementById("p3").innerHTML;
// console.log(p3);


// Gets specific link
// let link = document.body.getElementsByTagName("a")[0];
// console.log(link.href);


// Switchs locations of elements on the page (swaps array spots);
// let paragraphs = document.body.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[0]);


// Swaps around the "p" tags locations
// function changePara() {
//   let para = document.body.getElementsByTagName("p");
//   document.body.insertBefore(para[2], para[0]);
// }


// Changes the image to say "Hello"
// function changePara() {
//   let img = document.body.getElementsByTagName("img")[0];
//   let text = document.createTextNode("Hello"); What the image is changed to
//   img.parentNode.replaceChild(text, img); Swaps the text to the img.  
// }


// When clicking the button it will add the message at the bottom
// function changePara() {
//   let ele = document.createElement("h2");
//   ele.innerHTML = "Hi there!";
//   document.body.appendChild(ele);
// }

   
// When clicking the button it adds the message between the headline and button.
// function changePara() {
//   let ele = document.createElement("h2");
//   ele.innerHTML = "Hi there!";
//   let div = document.getElementById("div");
//   div.appendChild(ele);
// }


// Click to delete the text
// function deleteH2() {
//   let h2 = document.body.getElementsByTagName("h2")[0];
//   h2.remove();
// }


// Changes the color 
// function changePara() {
//   let para = document.getElementById("para");
//   para.style.color = "red";
// }


// Adds a counter so every time you click the button it displays how many times it been clicked 
// let count = 1;
// function changePara() {
//   let ele = document.createElement("h2");
//   ele.innerHTML = "Hi there! " + count++;
//   let div = document.getElementById("div");
//   div.appendChild(ele);
// }


// Gets user input for what tag is wanted and for what the message will say
// function changePara() {
//   let ele = document.createElement(prompt("Tag name please: "));
//   ele.innerHTML = prompt("text please");
//   let div = document.getElementById("div");
//   div.appendChild(ele);
// }


function changePara(x) {
  // console.log(x);
  // console.log(x.id);
  // console.log(x.attributes);
  console.log(x.value);
}

