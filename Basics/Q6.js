const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var vals = userInput[0].split(" ").map(val => +val);
var rangevals = userInput[1].split(" ").map(val => +val);
var count = 0;
var num2 = vals[1];
var count = 0;
for(i = 0; i < rangevals.length; i++)
{
if(rangevals[i] == num2)
{
count++;
break;
}
}

if(count > 0)
{
    console.log("yes");
}
else
{
    console.log("no");
}


});