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
if (n == 1)
  console.log("31");
else if (n == 2)
  console.log("28");
else if (n == 3)
  console.log("31");
else if (n == 4)
  console.log("30");
else if (n == 5)
  console.log("31");
else if (n == 6)
  console.log("30");
else if (n == 7)
  console.log("31");
else if (n == 8)
  console.log("31");
else if (n == 9)
  console.log("30");
else if (n == 10)
  console.log("31");
else if (n == 11)
  console.log("30");
else if (n == 12)
  console.log("31");
else
  console.log("Error");
//end-here
});
