const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    let inputs = userInput[1].split(" ");
    
    let sum = 0;
    
   for(let i=0; i<inputs.length; i++){
       
       sum  = sum | inputs[i];
   }
   
   console.log(sum);
   
    });
    
    
    
    