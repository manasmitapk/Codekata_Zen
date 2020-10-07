const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

    var sizeArr = userInput[0].split(" ");
    var numArr = userInput[1].split(" ");
    var check_Id = userInput[2];

    var status = [];
   
    for(let ind=0; ind<numArr.length; ind++){
        if(check_Id === numArr[ind]){
            status.push(numArr[ind]);
        }
    }
    
    if(status.length === 0){
        console.log("no");
    }else{
        console.log("yes");
    }
});
    
    
    
    