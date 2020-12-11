

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
  
    newArr = (dec2bin >>> 0).toString(2).split('').reverse();
    let count=[];
   // console.log(newArr);
    
    for(let i=0; i<=newArr.length; i++){
        if(newArr[i]==='1'){
            
            count.push(i);
        }
    }
    //console.log(newArr);
    console.log(count[0]+1);
});
    
    
    
    