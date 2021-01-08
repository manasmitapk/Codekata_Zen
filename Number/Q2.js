const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
  var n = userInput[0].split("",2);
  var n1 = Number(userInput[0]);
  let p = parseInt(n[0]);
  let q = parseInt(n[1]);
  
  let k = Number(parseInt((p+q) + (p*q)));
  
  if(n1 === k){
    console.log("Great");
  }
 else
    console.log("no");

});