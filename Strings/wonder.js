const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let myArr = userInput[0].split('');
    let str = [];
    myArr.forEach(data => {
        if(!str.includes(data)) 
        str.push(data);
    });
    if(str.length==3)
    console.log("Wonder");
    else 
    console.log(-1);
});