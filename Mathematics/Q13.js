const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var n = +userInput[0];
var res = [];
var total = [];
for(let i=0; i <= n; i++)
{
   if(i === 0)
   {
       res[i] = 1000;
       total[i] = res[i];
       continue;
   }
   else if(i == 1)
   {
       res[i] = 1000 ;
       total[i] = res[i] + res[i];
       continue;
   }
   res[i] = res[i-1] + res[i-2];
   total[i] = total[i-1] + res[i];
}

console.log(total[n]);
});