const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0].split('');
    var revInputs = inputs.sort(function(a, b){return b - a});
    
    console.log(revInputs.join(''));

});
    
    
    
    