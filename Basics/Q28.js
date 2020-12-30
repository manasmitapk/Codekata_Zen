const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0].split(" ");
    
    if (inputs[0] !== inputs[1]&& inputs[0] !== inputs[2]){
        console.log("yes");
    } else {
        console.log("no");
    }
});
    
    
    
    