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

function strLength(a) {
  var length = 0;
  while (a[length] !== undefined)
    length++;
  //return length;
  console.log(length);
}

strLength(a);
});
