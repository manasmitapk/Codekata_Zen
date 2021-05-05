const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let myArr = userInput[1].split(" ");
    //console.log(myArr);
    
    console.log(myArr.reverse().join(" "));
  
    
    
});