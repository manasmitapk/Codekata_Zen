const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = parseInt(userInput[0]);
    
    for(let i=1; i<=input; i++){
        var s= '';
        for(let j=1; j<=i; j++){
            s += "*";
        }
           console.log(s);
        
    }
    
    for(let i=input-1; i>=1; i--){
        var s2= "";
        for(let j=1; j<=i; j++){
            s2 += "*";
        }
        console.log(s2);
    }
   
   });
    
    
    
    