const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var hexadecimal2decimal = userInput[0];
  
    console.log(parseInt(hexadecimal2decimal, 16).toString(10));
    

});
    
    
    
    