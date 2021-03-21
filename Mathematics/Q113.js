const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let myArr = userInput[0].split('');
    
    console.log(parseInt(myArr[0])+parseInt(myArr[myArr.length-1]));
});