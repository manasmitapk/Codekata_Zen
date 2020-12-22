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
let num = userInput[0];
let mul = "";

if (num === 0)
{
    console.log("Null");
    }
    else
    {
        for(let ind=1; ind<=userInput[0]; ind++)
        mul += (9*ind) + " ";
        console.log(mul.trim());
    }
     

//end-here
});