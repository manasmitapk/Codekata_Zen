const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let myArr = userInput[0].split(" ");
    //console.log(myArr);
    
    let s = [];
    
    for(let i=0; i<myArr.length; i++){
        
        if(myArr[i]=== "the" || myArr[i] === "THE" || myArr[i] === "a"|| myArr[i]==="A" || myArr[i] === "AN"|| myArr[i] === "an" || myArr[i] ==="The" ){
            s += " " +myArr[i+1];
        }
    }
    
    console.log(s.trim());
    
    
});