const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0];
    
    var arasu =[].map(Number);
    for(let ind=1; ind<=input; ind++){
        if(ind <= input){
            arasu.push((ind*ind)+1);
        }
    }
    console.log(arasu.join(" "));
    });
    
    
    
    