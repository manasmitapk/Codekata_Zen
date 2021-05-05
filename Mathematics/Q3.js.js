const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
  var n = parseInt(userInput[0]);
  
     if(n%7 === 0)
    {
     console.log("yes");
    }
    else{
       console.log("no");
    }
});
