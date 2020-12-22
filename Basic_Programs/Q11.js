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
let r= Math.round(n);
   if (r%2===0)
   {
    console.log("Even");
   } 
   else
   {
   console.log("Odd");
  }
  
  
//end-here
});
