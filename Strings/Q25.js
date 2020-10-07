const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split('');
    var evenL = [];
    var oddL = [];
    
    for (let i=0; i<input.length; i++)
    {
        if(i%2 === 0){
            evenL.push(input[i]);
        } else{
            oddL.push(input[i]);
        }
        
    }
    
    console.log(evenL.join("") +" "+ oddL.join(""));
});
    