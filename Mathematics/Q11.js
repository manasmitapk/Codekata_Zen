const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
  var n =userInput[0].split(" ");
  
  console.log(Math.min.apply(null, n) );
});
