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
var pro = 1;

for(let ind=0; ind<num.length; ind++){
        pro =(pro * num[ind]); 
}

console.log(pro);
});