const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split(" ");
    
    var area_Of_Triangle = 0.5*input[0]*input[1];
    
    console.log(area_Of_Triangle);
    
   });