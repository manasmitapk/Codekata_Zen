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
  let arr2 = [];
  
  for(let i = 0; i < k.length; i++) {
      if(k[i]%2 === 0){
          arr.push(k[i]);
      }
      else {
          arr2.push(k[i]);
  }
 }
    if(arr.length === 1){
         console.log(arr.join(''));
  
   } else if (arr2.length === 1){
       console.log(arr2.join(''));
       
   } else {
       console.log("-1");
   } 
});