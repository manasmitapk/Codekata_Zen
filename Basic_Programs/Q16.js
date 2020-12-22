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
let r = parseFloat(userInput[0]);
let c = 2 * Math.PI * r;
   if (r<0)
   {
    console.log("Error");
   } 
   else
   {
   console.log(c.toFixed(2));
  }
//end-here
});
