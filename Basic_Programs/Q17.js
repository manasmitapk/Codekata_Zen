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
let A = parseInt(userInput[0]);
let B = parseInt(userInput[1]);
let C = A*B;

   {
   console.log(C);
  }
//end-here
});
