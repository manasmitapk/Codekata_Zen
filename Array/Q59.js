const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let n = userInput[0];
  let k = userInput[1].split(' ').map(Number);
  let arr = [];
  
  for(let i = 0; i < k.length; i++) {
      if(k[i]<k[i+1]){
          arr.push(k[i+1]);
      }
      else {
           arr.push(k[i]);
      }
  }
  arr.pop();
  console.log(arr.join(''));
  
});