const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let arr = userInput[0].split('');
    
    let s = 0;
    
    for (let ind=0; ind<arr.length; ind++){
        
        s += Math.pow(arr[ind],2);
    }
    
    console.log(s);
});