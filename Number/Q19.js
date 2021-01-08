const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var vals = userInput[1].split(" ").map(val => +val);
var max = vals[0];
var min = vals[0];
var res_arr = [];
var count = 0;
for(i = 0; i < vals.length; i++)
{
 if(max < vals[i] )
    {
        max = vals[i];
    }
     if(min > vals[i] )
    {
        min = vals[i];
    }
}
var result = vals.indexOf(max) - vals.indexOf(min);
console.log(result);
});