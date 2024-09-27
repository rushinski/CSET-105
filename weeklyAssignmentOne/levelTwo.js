const prompt = require('prompt-sync')();

let score = 0;
let counterMaxScore = 0;
let counterThreeNumber = 0;

console.log(`WELCOME TO MATH MIND!\n-----------------------\nIn this game you will solve mathematical equations mentally. There are two modes, "Max Score" and "Three-out". In Max Score, you will solve 20 math equations, and your score will be given to you after completion. In Three-out, you will answer math equations until you get a question wrong, then your score will be provided. Points are determined by 10 points for correct answers and losing 5 points for incorrect answers. You can skip a question while playing Max Score but NOT in Three-out by simply typing "skip".\nHave fun!\n`);

modeSelect();

function modeSelect() {
  const mode = Number(prompt('Enter "1" for MAX SCORE or Enter "2" for THREE-OUT : '));

  if (mode === 1 || mode === 2) {
    random(mode);
  } else {
    console.log(`Invalid input, "${mode}" is not "1" or "2"\nInput either "1" or "2" to select your game\nTry again...\n----------`);
    modeSelect();
  }
}

function random(modeType) {
  if (modeType === 1 && counterMaxScore < 20) {
    generateQuestion(modeType);
  } else if (modeType === 2 && counterThreeNumber < 3) {
    generateQuestion(modeType);
  } else {
    console.log("Game over!\nYour final score is: " + score);
    return;
  }
}

function generateQuestion(modeType) {
  let min = 0;
  let max = 10;

  const numRandomOne = Math.floor(Math.random() * (max - min + 1)) + min;
  const numRandomTwo = Math.floor(Math.random() * (max - min + 1)) + min;

  let opSignArray = ['*', '/', '+', '-'];
  let randOpIndex = Math.floor(Math.random() * 4);
  let randomOp = opSignArray[randOpIndex];

  let correctAnswer;
  switch (randomOp) {
    case '+':
      correctAnswer = numRandomOne + numRandomTwo;
      break;
    case '-':
      correctAnswer = numRandomOne - numRandomTwo;
      break;
    case '/':
      correctAnswer = (numRandomTwo !== 0) ? (numRandomOne / numRandomTwo).toFixed(2) : 0;
      break;
    case '*':
      correctAnswer = numRandomOne * numRandomTwo;
      break;
  }

  let equation = `${numRandomOne} ${randomOp} ${numRandomTwo} = `;
  checkAnswer(correctAnswer, equation, modeType);
}

function checkAnswer(correctAnswer, equation, modeType) {
  let enteredNum = prompt(equation);

  if (enteredNum === 'skip' && modeType === 1) {
    console.log(`You chose to skip. The correct answer was "${correctAnswer}".`);
    counterMaxScore++;
    random(modeType);
    return;
  }

  if (!isNaN(enteredNum) && enteredNum !== '') {
    enteredNum = Number(enteredNum);
    if (enteredNum === Number(correctAnswer)) {
      console.log(`Correct!\n${score} + 10 = ${score += 10}\nCurrent Score: ${score}\n----------`);
    } else {
      console.log(`Incorrect...\nThe correct answer was ${correctAnswer}\n${score} - 5 = ${score -= 5}\nCurrent Score: ${score}\n----------`);
      if (modeType === 2) {
        counterThreeNumber++;
      }
    }
  } else {
    console.log(`Invalid input. Please enter a number or type "skip" if you are in Max Score mode.\n----------`);
    return checkAnswer(correctAnswer, equation, modeType);
  }

  if (modeType === 1) {
    counterMaxScore++;
  }
  random(modeType);
}
