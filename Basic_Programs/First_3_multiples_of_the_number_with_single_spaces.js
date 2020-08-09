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
let m = "";
let n = parseInt(userInput[0])
for(let i =1; i <= 3; i++) {
   m += (n * i) + " ";
}
console.log(m.trim());
//end-here
});
