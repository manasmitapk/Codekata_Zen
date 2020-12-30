const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  var n = parseInt(userInput[0]);
  
 if(n<=100000)
 {
     let sumNum=0;
     for(let ind=1; ind<=n; ind++)
     {
         sumNum = sumNum+ind;
     }
      console.log(sumNum);
}
   
});
