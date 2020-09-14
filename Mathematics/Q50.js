const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split(" ").map(Number);
    var l = input[0];
    var w = input[1];
    var h = input[2];
    
    var surfaceArea = (2*((l*w) + (w*h) + (l*h)));
    
    var volume = l*w*h;
    
    console.log(surfaceArea +" "+ volume) ;
    
   });