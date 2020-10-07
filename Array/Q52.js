const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var myArr = userInput[1].split(" ");
   
    console.log(myArr.sort(function(a,b){return a-b;}).join(" "));
    
});
    
    
    
    