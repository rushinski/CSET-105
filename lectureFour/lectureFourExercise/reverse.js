const { contReset } = require("console");
const { userInfo } = require("os");
const prompt = require(`prompt-sync`)();

function stringReversal (str) {
  let newString = " ";
  for (i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}
console.log(stringReversal("123"));