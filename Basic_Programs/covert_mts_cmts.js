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

console.log(parseInt(userInput[0])*1000);
console.log(parseInt(userInput[0])*100000);
//end-here
});
