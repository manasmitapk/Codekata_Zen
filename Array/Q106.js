const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var bin2hexadecimal = userInput[0];
  
    console.log(parseInt(bin2hexadecimal, 2).toString(16));
    

});
    
    
    
    