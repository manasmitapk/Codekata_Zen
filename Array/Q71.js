const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    
let n = userInput[0].split(' ').map(Number);
let arr = userInput[1].split(' ').map(Number);
let ind = [];
    for(let i=0; i<arr.length; i++){
        if(n[1] === arr[i]){
            ind.push(i+1);
        }
    }
    if(ind.length === 0){
        console.log("-1");
    } else {
        console.log(ind.join(''));
    }
    
    
});