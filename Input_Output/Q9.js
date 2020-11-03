const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let inputs1 = userInput[0].split('');

for(let i = 0 ; i<inputs1.length; i++){
console.log(inputs1[i]);
}

});