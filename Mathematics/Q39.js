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
    
    var factors = [].map(Number);
    if(input<=1000){
    for(let ind=1; ind<=input; ind++){
        if(input%ind === 0){
            factors.push(ind);
        }
    }
    console.log(factors.join(" "));
}
    });
    
    
    
    