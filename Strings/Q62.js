

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var word = userInput[0].split(" ");
    var noOfLetter = word[1];
    let newArr = word[0].split('');
    
    let finalArr =[];
    
    for(let i=1; i<=newArr.length; i++){
       if(i===noOfLetter || i%noOfLetter === 0) {
       finalArr.push(newArr[i-1]);
    }
    }
    console.log(finalArr.join(' '));
    
});
    
    
    
    