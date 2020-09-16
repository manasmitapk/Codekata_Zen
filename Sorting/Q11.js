const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var myArr = userInput[1].split(" ").map(Number);
   
    var codepass = myArr.sort(function(a,b){return a-b;});
    
    console.log(codepass[0]+codepass[1]);
    
});
    
    
    
    