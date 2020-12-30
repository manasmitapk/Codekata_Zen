const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let input = userInput[0].split("").map(element => +element);
//console.log(input);
let sum = 0;

for(let i=0; i<input.length; i++){
    sum +=input[i];
}
console.log(sum);

});