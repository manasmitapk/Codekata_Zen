const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = parseInt(userInput[0]);
    var numRange = userInput[1].split(" ");
    var lmt_1 = parseInt(numRange[0]);
     var lmt_2 = parseInt(numRange[1]);
    
   if(lmt_1<input && input< lmt_2){
        
        console.log("yes");
    }
    else{
        console.log("no");
    }
    
    
   });