const prompt = require('prompt-sync')();

let score = 0;
let counterMaxScore = 0;
let counterThreeNumber = 0;

console.log(`WELCOME TO MATH MIND!\n-----------------------\nIn this game you will solve mathematical equations mentally. There are two modes, "Max Score" and "Three-out". In Max Score, you will solve 20 math equations, and your score will be given to you after completion. In Three-out, you will answer math equations until you get a question wrong, then your score will be provided. Points are determined by 10 points for correct answers and losing 5 points for incorrect answers. You can skip a question while playing Max Score but NOT in Three-out by simply typing "skip".\nHave fun!\n`);

modeSelect();

function modeSelect() {
  const mode = Number(prompt('Enter "1" for MAX SCORE or Enter "2" for THREE-OUT: '));

  if (mode === 1 || mode === 2) {
    difficultySelect(mode);
  } else {
    console.log(`Invalid input, "${mode}" is not "1" or "2". Try again.\n----------`);
    modeSelect();
  }
}

function difficultySelect(modeType) {
  console.log(`Difficulty Selection\n-----------------------\nEnter "1" for Easy...\nEnter "2" for Medium...\nEnter "3" for Hard...`);
  const difficulty = Number(prompt('Enter "1", "2", or "3": '));

  if (difficulty === 1 || difficulty === 2 || difficulty === 3) {
    random(modeType, difficulty);
  } else {
    console.log(`Invalid input. Try again.\n----------`);
    difficultySelect(modeType);
  }
}

function random(modeType, difficultyType) {
  if (modeType === 1 && counterMaxScore < 20) {
    generateQuestion(modeType, difficultyType);
  } else if (modeType === 2 && counterThreeNumber < 3) {
    generateQuestion(modeType, difficultyType);
  } else {
    console.log("Game over!\nYour final score is: " + score);
    return;
  }
}

function generateQuestion(modeType, difficultyType) {
  let numRandomOne, numRandomTwo, correctAnswer;
  let min = 0, max = 0;
  let opSignArray;

  switch (difficultyType) {
    case 1:
      max = 9;
      opSignArray = ['+', '-'];
      break;
    case 2:
      max = 99;
      opSignArray = ['+', '-', '*', '/'];
      break;
    case 3:
      max = 999;
      opSignArray = ['+', '-', '*', '/', '%'];
      break;
  }

  numRandomOne = Math.floor(Math.random() * (max - min + 1)) + min;
  numRandomTwo = Math.floor(Math.random() * (max - min + 1)) + min;

  let randOpIndex = Math.floor(Math.random() * opSignArray.length);
  let randomOp = opSignArray[randOpIndex];

  switch (randomOp) {
    case '+':
      correctAnswer = numRandomOne + numRandomTwo;
      break;
    case '-':
      correctAnswer = numRandomOne - numRandomTwo;
      break;
    case '*':
      correctAnswer = numRandomOne * numRandomTwo;
      break;
    case '/':
      numRandomTwo = numRandomTwo === 0 ? 1 : numRandomTwo;
      correctAnswer = Math.floor(numRandomOne / numRandomTwo);
      break;
    case '%':
      numRandomTwo = numRandomTwo === 0 ? 1 : numRandomTwo;
      correctAnswer = numRandomOne % numRandomTwo;
      break;
  }

  let equation = `${numRandomOne} ${randomOp} ${numRandomTwo} = `;
  checkAnswer(correctAnswer, equation, modeType, difficultyType);
}

function checkAnswer(correctAnswer, equation, modeType, difficultyType) {
  let enteredNum = prompt(equation);

  if (enteredNum === 'skip' && modeType === 1) {
    console.log(`You chose to skip. The correct answer was "${correctAnswer}".`);
    counterMaxScore++;
    random(modeType, difficultyType);
    return;
  }

  if (!isNaN(enteredNum) && enteredNum !== '') {
    enteredNum = Number(enteredNum);
    if (enteredNum === correctAnswer) {
      console.log(`Correct!\n${score} + 10 = ${score += 10}\nCurrent Score: ${score}\n----------`);
    } else {
      console.log(`Incorrect...\nThe correct answer was ${correctAnswer}\n${score} - 5 = ${score -= 5}\nCurrent Score: ${score}\n----------`);
      if (modeType === 2) {
        counterThreeNumber++;
      }
    }
  } else {
    console.log(`Invalid input. Please enter a number or type "skip" if you are in Max Score mode.\n----------`);
    return checkAnswer(correctAnswer, equation, modeType, difficultyType);
  }

  if (modeType === 1) {
    counterMaxScore++;
  }
  random(modeType, difficultyType);
}
