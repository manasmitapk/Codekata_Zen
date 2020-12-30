const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0].split(" ");
    if( 1 <= inputs[0] <= 5 <= inputs[1] <= 50){
    console.log(Math.pow(inputs[0],inputs[1]));
    }

});
    
    
    
    