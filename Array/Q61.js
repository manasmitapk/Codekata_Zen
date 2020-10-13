const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

    var num = userInput[0].split(" ").map(Number);
    var numArr = userInput[1].trim().split(" ").map(Number);
    var arrNum = [];
    if(num[0]<= 100000){
    for(let ind=0; ind<numArr.length; ind++){
            if(numArr[ind]<num[1]){
                arrNum.push(numArr[ind]);
            }
            
        }
    }
    if(arrNum.length === 0){
    console.log("-1");
    } else{
        console.log(arrNum.sort(function(a,b){ return a-b;}).join(" "));
    }
    
});
    
    
    
    