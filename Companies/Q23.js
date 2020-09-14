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
    var arr1 = userInput[1].split(" ").map(Number);
    
    var sum = [];
   
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i]===i){
             sum += (arr1[i] + " ");
        } 
    }
        if(sum.length===0){
            console.log("-1");
        } else {
            console.log(sum.trim());
            
        }
         
         
   });  