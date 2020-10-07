const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let Arr = userInput[0];
    let arr1 = userInput[1].split(" ").map(Number).sort(function(a,b){ return a-b; });
    
    let arr2 = userInput[2].split(" ").map(Number).sort(function(a,b){ return b-a; });
    
    console.log(arr1.concat(arr2).join(" "));
    
});