const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var myArr = userInput[0].split('').map(Number);
    var powerOf = myArr.length;
    
    var s = 0;
        
        for(let ind=0; ind<myArr.length; ind++){
        
            s += Math.pow(myArr[ind],powerOf);
        }

    console.log(s);
    
});
    
    
    
    