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

for(let i=1; i<=input; i++){
    console.log(i);
}

});