const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var num = userInput[0].split("").map(val => +val);
var result_arr = [];
for(var x in num){
    if(num[x] % 2 !== 0)
    {
        result_arr.push(num[x]);
    }
}
if(result_arr.length <= 0)
{
    console.log(-1);
}
else
{
console.log(result_arr.join(" "));
}
});