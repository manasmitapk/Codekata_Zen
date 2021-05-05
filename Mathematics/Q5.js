const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
  var n =userInput[0].split(" ");
  let a= parseInt(n[0]);
  let b= parseInt(n[1]);
  let c= parseInt(n[2]);
  
  console.log(parseInt(a*b%c));
});
