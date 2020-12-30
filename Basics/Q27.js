const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    let inputs = userInput[0];
    
    let sum = ~inputs;
    
 
   console.log(sum);
   
    });
    
    
    
    