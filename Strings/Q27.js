const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a = userInput[0];
//console.log(a);

var r = a.split('').reverse().join("");
//console.log(r);

if(a === r){
    console.log("yes");
} else {
    console.log("no");
}
});
