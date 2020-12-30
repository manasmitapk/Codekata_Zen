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
    //console.log(num);
    
     if (num <=1 || num <=3){
       console.log("no");
     } 
        // This is checked so that we can skip  
        // middle five numbers in below loop 
     else if (num % 2 === 0 || num % 3 === 0){
        for (let i=5; i*i<=num; i=i+6){
            if (num % i === 0 || num % (i+2) === 0){
                console.log(num);
                console.log("yes");
            }
        }} else {
        console.log("no");
    }
   
    });