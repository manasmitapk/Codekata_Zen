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
let c = parseFloat(userInput[0]);
let f = (1.8*c)+32;
  {
     console.log(f.toFixed(2));
  }
//end-here
});
