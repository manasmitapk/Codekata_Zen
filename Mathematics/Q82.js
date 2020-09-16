const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0];
    
    if (Math.log2(inputs) % 1 === 0){
        console.log("yes");
    } else {
        console.log("no");
    }
});
    
    
    
    