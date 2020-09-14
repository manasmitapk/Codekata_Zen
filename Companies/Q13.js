const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0];
    var arr1 = userInput[1].split(" ");
    var arr2 = userInput[2].split(" ");
    var checkArr = arr1.reverse();
  
   if(JSON.stringify(checkArr)===JSON.stringify(arr2)){
   
   console.log("yes");
   }  else {
       console.log("no");
   }
   });