const prompt = require ("prompt-sync")({sigint: true});

console.log("Welcome to the Guessing Game!\nIn this game you will enter a random number between 1 and 100. If you guess the number correctly, you win. If you guess incorrectly, youll be told if the number is higher or lower than your guess. You have 8 guesses to get the number");

let min = 1;
let max = 100;
let track = 0;
let counter = 8;

const NumRan = (Math.floor(Math.random() * (max - min + 1)) + min);

while (track == 0) {
  let NumGuess = prompt("Enter a number: ");
  while (NumGuess > 100 || NumGuess < 0) {
    NumGuess = prompt("Enter in a valid number (Between 1 and 100): ");
  }
  
  if (NumGuess == NumRan) {
    console.log("You Win!  The number was " + NumRan);
    track = 1;
  }

  else if (NumGuess != NumRan) {
    counter --;
    console.log("Wrong number guess again.\nYou have " + counter + " guesses left.");
    if (NumGuess > NumRan) {
      console.log("The number is lower than your guess");
    }
    else if (NumGuess < NumRan) {
      console.log("The number is greater than your guess")
    }
    track = 0;
    if (counter == 0) {
      console.log("The number was " + NumRan + "\nYou lose...");
      track = 1;
    }
  }
}
