const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0].split(" ");
    var a = inputs[0];
    var b = inputs[1];
    var c = inputs[2];
    if(a<= 100000 && b<= 100000 && c<= 100000 ){
    if( a*a + b*b ===c*c || a*a + c*c === b*b || b*b + c*c === a*a){
        console.log("yes");
     } 
    else {
        console.log("no");
    }
    }
});
    
    
    
    