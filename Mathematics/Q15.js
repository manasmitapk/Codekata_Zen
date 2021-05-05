const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var num =userInput[0].split('');[...num+''].map(n=>+n);
var res = parseInt(num);
var pro = 1;

for(let ind=1; ind<num.length; ind++){
        pro =(pro * num[ind]); 
}

if(pro>3&&pro%3===0)
    console.log("yes");
else
    console.log("not");
});