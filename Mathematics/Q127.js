const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let num = userInput[0];
    
    if(num%4===0){
        console.log("YES");
    } else {
        console.log("NO");
    }
    
});