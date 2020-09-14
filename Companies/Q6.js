const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split(" ");
    var numArr = userInput[1].split(" ");
    var s = [];
    for(let ind=0; ind<numArr.length; ind++){
        if(input[1] === numArr[ind]){
            s.push(numArr[ind]);
        }
    }
    
    if(s.length>=1){
        console.log("yes");
    } else {
        console.log("no");
    }
    
   });