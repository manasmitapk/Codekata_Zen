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
    
    console.log((parseInt(inputs.toString().split('').reverse().join('')))*Math.sign(inputs));
    

});
    
    
    
    