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
let n = parseFloat(userInput[0]);
   if (n%4===0 && n%100!==0 || n%400===0)
   {
    console.log("Y");
   } 
   else
   {
   console.log("N");
  }
//end-here
});
