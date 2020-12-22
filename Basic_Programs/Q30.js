const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let input = userInput[0];
//console.log(input);
let sum = 0;

for(let i=0; i<=input; i++){
    sum +=i;
}
console.log(sum);

});