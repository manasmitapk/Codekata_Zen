const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a = userInput[0].split('');

if(a.length === 3){
    
    if(a[0]!==a[1] && a[1]!==a[2] && a[0]!==a[2]){
        console.log("1");
    } else {
        console.log("0");
    }
} else {
        console.log("0");
    }
});
