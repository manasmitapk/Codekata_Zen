const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = parseInt(userInput[0]);
    var arr1 = userInput[1].split(" ").map(Number);
    var arr2 = userInput[2].split(" ").map(Number);
    
    var arr3 =(arr1.concat(arr2)).sort(function(a, b){return a-b});
    
    var output = 0;
    
    for(let ind=0; ind<arr3.length; ind++)
    {
        if(ind === (arr3.length/2) || ind === ((arr3.length/2)-1)){
            
            output = output+arr3[ind];
            
        }
    }
    
    console.log(output);
    
   });
    