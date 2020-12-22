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
let b = Math.sqrt(3);
let a = parseFloat(userInput[0]);
let t = 0.25*(b*a*a);
  {
    console.log(t.toFixed(2));
  }
//end-here
});
