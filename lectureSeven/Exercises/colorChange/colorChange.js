let defaultColors = [];

window.onload = function() {
  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    defaultColors.push(buttons[i].style.backgroundColor);
  }
};

function colorChange() {
  let selectedColor = document.getElementById("colors").value;
  let buttons = document.body.getElementsByClassName("button");

  for (let i = 0; i < buttons.length; i++) {
    if (selectedColor === "Reset") {
      buttons[i].style.backgroundColor = defaultColors[i];
    } else if (selectedColor === "Random") {
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      buttons[i].style.backgroundColor = randomColor;
    } else {
      buttons[i].style.backgroundColor = selectedColor.toLowerCase();
    }
  }
}