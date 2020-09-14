const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0];
    var numArr = userInput[1].split(" ").map(Number);
    if( 1 <= inputs <= 10000){
    var newArr = numArr.reverse().join("->");
    
    console.log(newArr);
    }
});
    
    
    
    