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
    var arr1 = userInput[1].split(" ").map(Number).sort(function(a,b){return b-a});

    var Highest = arr1[0];
   
    for(let ind=0; ind<arr1.length; ind++)
    {
        if(arr1[ind] < Highest){
            Highest = arr1[ind];
            break;
         }
    }
    
    console.log(Highest);
    
   });
    
    
    
    