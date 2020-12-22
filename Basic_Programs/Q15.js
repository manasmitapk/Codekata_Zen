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
let inputs = userInput[0].split(" ");
let n = parseInt(inputs[0]);
let m = parseInt(inputs[1]);
   if (n<m)
   {
    console.log(parseInt(inputs[0]));
   } 
   else
   {
   console.log(parseInt(inputs[1]));
  }
//end-here
});
