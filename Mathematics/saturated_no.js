const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = userInput[0].split('');
    let newNum = new Set(num);
    let arr = [...newNum];
    console.log(arr);
    if(arr.length==2)
    console.log('Saturated');
    else 
    console.log('Unsaturated');
});