const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", () => {
    let str = userInput[0].split('');
    let reverseString = str.reverse();
    let myStr = str[0];
    reverseString.splice(0,1,myStr.toUpperCase());
    console.log(reverseString.join(''));
});