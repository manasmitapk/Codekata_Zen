const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a = userInput[0].split(" ");

if(a[0] === a[1]){
    console.log("yes");
} else {
    console.log("no");
}


});
