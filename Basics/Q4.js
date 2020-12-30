const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    let inputs = userInput[0].split(" ");
    
    let num = Math.sqrt(inputs[0]*inputs[1]);
    
    if((num - Math.floor(num))===0)
    {
        console.log("yes");
    } else{
        console.log("no");
    }
   
    });
    
    
    
    