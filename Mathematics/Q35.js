const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = parseFloat(userInput[0]);
    
        console.log(Math.ceil(input));

    });
    
    
    
    