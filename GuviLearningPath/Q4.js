const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var num = userInput[0];
var inputs = userInput[1].split(" ").map(val => +val);

if(inputs[0]+inputs[1]+inputs[2]===inputs[inputs.length-1]+inputs[inputs.length-2]+inputs[inputs.length-3])
{
    console.log("1");
}
else
{
  console.log("0");  
}


});