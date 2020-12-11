

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    let noOfworkingDays = userInput[0];
    let attendence = userInput[1].split(" ");
    
    presentDays = 0;
    
    for(let i=0; i<=noOfworkingDays; i++){
        if(attendence[i]==='P'){
            presentDays++;        }
    }
    
    if(((presentDays/noOfworkingDays)*100)> 25){
        console.log("Not Blacklisted").trim();
    } else{
         console.log("Blacklisted").trim();
    }
});
    
    
    
    