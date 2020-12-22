const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let a = parseFloat(userInput[0]);
let b = parseFloat(userInput[1]);
let c = a+b;
  {
    console.log(c.toFixed(1));
  }
//end-here
});
