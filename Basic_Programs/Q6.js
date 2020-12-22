const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let m = 1;
let n = parseInt(userInput[0]);
    for (let i=n; i>=1; i--){

    m = m*i;
}
console.log(m);
//end-here
});
