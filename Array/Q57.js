const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

    var num = userInput[0].split(" ").map(Number);
    var numArr = userInput[1].split(" ").map(Number);
    
    for(let ind=0; ind<num[1]; ind++){
            numArr.pop();
            
        }
    console.log(numArr.join(" "));
});
    
    
    
    