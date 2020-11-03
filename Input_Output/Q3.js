const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let inputs1 = userInput[0].split(' ');
let inputs2 = userInput[1].split(' ');

console.log(inputs1.join(' '));
console.log(inputs2.join(' '));

});