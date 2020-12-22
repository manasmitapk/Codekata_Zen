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
let n = parseInt(userInput[0])
if (n < 0)
  console.log("Error");
else if (n == 0)
  console.log("0");
else
  console.log(n*n);
//end-here
});
