const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var num = userInput[0].split(" ");
    var arrList = userInput[1].split(" ");
    
    var newArr =[];
    //var removeArr = [];
    
    for(let i=0; i<arrList.length; i++){
        if(num[1] !== arrList[i]){
            newArr.push(arrList[i]);
        }
    }
    
    if(newArr.length === 0){
        console.log("empty");
    } else {
        console.log(newArr.join(" "));
    }
    
});
    
    
    
    