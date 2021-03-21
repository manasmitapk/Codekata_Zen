const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let myArr = userInput[0].split(' ');
    
    if((parseInt(myArr[0])+parseInt(myArr[1])+parseInt(myArr[2])) === 180)
    {
        console.log("yes");
    } else {
        console.log("no");
    }
    
    
    
});