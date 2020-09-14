const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = userInput[0].split(" ");
    var str1 = userInput[1].split(" ");
    var k = input[1];
    var out = [];
    
    for(let ind=0; ind<str1.length; ind++){
        if(k === str1[ind]){
            out.push(str1[ind]);
        }
    }
         if(out.length === 1){
             console.log("0");
         } else if(out.length === 0){
             console.log("-1");
         } else {
             console.log(out.length);
         }

    });
    
    
    
    