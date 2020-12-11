

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var dec2bin = userInput[0];
  
    newArr = (dec2bin >>> 0).toString(2).split('');
    let count = 0;
   // console.log(newArr);
    
    for(let i=0; i<=newArr.length; i++){
        if(newArr[i]==='1'){
        count++;
        }
    }
    console.log(count);
});
    
    
    
    