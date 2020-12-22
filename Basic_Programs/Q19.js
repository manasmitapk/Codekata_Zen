const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let inputs = userInput[0].split(' ');
let a = parseInt(inputs[0]);
let b = parseInt(inputs[1]);
let c = parseInt(inputs[2]);

let r = Math.pow(b, 2) - (4 * a * c);
let root1 = ((-1 * b) + Math.sqrt(r))/(2*a);
let root2 = ((-1 * b) - Math.sqrt(r))/(2*a);

console.log(root1.toFixed(2));
console.log(root2.toFixed(2));

});