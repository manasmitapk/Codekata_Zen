const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split('');
    let outputArr = [];
    
     if(input.length%2 === 0){
            
        for(let ind=0; ind<input.length; ind++)
    {
       if(ind === (input.length/2)|| ind === ((input.length/2) - 1))
       {
           outputArr.push("*");
       } else {
           outputArr.push(input[ind]);
       }
      
    }
    
     }
     else {
         for(let i=0; i<input.length; i++)
    {
       if(i === ((input.length/2) - 0.5))
       {
           outputArr.push("*");
       } else {
           outputArr.push(input[i]);
       }
    }
    
     }
     
     console.log(outputArr.join(""));
});
    