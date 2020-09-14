const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0];
    var myArr = userInput[1].split(" ").map(Number);
    
    var s = 0;
    if(input<=100000){
    for(let ind=0; ind<myArr.length; ind++){
        if(myArr[ind]<0){
            s = myArr[ind];
        } 
    }
}

    console.log(s);
    
});
    
    
    
    