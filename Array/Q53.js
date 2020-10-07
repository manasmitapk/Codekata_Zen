const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

    let priceArr = userInput[1].split(" ").sort(function(a,b){return a-b;});
 
    for(let ind=0 ; ind<userInput[1].split(" ").length; ind++){
        if(JSON.stringify(userInput[1].split(" ")[ind]) === JSON.stringify(priceArr[0])){
          console.log("Dealer"+ind);  
    }
     
    }
   
});
    
    
    
    