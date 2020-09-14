const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = Number(userInput[0]);
    var factorial = 1;
    if(1<=inputs && inputs<=25){
            for(let ind=inputs; ind>=1; ind--){
                
            factorial = factorial*ind;
            
        }
        console.log(factorial);
    } 
    else if(inputs===0){
        console.log("1");
    }

});
    
    
    
    