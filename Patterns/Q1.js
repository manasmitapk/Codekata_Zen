const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
  let numRow = userInput[0].split(" ");
  
  for(let i=0; i<numRow[0]; i++){
      let s='';
      for(let j=0; j<numRow[1]; j++){
          s += "* ";
      }
       console.log(s.trim());
  }
});