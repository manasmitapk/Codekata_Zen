const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  var e = userInput[0];
  var n =userInput[1].split(" ");
  
  console.log(Math.min.apply(null, n) );
});
