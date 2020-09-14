const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0].split(" ").map(Number);
   
    if((inputs[0]+inputs[1])%2===0){
        console.log("even");
    } else{
        
        console.log("odd");

    }
    
    
});
    
    
    
    