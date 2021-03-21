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
    
    let sum = 0;
    
    for(let i=0; i<myArr.length; i++){
        
        sum += myArr[i]*myArr[i];
    }
    
    console.log(sum);
    
});