const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0];
    let reverseString = str.split('').reverse();
    let newStr = reverseString.join('');
    console.log(newStr);
    if(str === newStr ){
        console.log("1");
    }
        else
        console.log("0");
});