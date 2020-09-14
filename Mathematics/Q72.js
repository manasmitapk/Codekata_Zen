const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var num = userInput[0];
    var oddFact = [];
    
    for(let i = 1; i <= num; i++) {

    if(num%i===0 && i%2!==0) {
     
        oddFact.push(i);
    } 
    
    }
    console.log(oddFact.join(' '));
});
    
    
    
    