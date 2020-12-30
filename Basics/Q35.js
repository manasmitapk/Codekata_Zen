const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    let inputs = userInput[0].split(" ");
    
    if(inputs[0]==="P" && inputs[1]==="R" || inputs[0]==="R" && inputs[1]==="P"){
        console.log("P");
    } else if(inputs[0]==="P" && inputs[1]==="S" || inputs[0]==="S" && inputs[1]==="P"){
        console.log("S");
    } else if(inputs[0]==="S" && inputs[1]==="R" || inputs[0]==="R" && inputs[1]==="S"){
        console.log("R");
    } else {
        console.log("D");
    }
   
    });
    
    
    
    