const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split(" ").map(Number);
    
    if((input[0]-input[1])%2 === 0){
        console.log("even");
    } else {
         console.log("odd");
    }
   
   });
    
    
    
    