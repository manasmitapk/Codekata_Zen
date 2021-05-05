const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let input = userInput[0].split(" ");

for(let i=0; i<input[1]; i++){
    console.log(input[0]);
}

});