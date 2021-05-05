const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    let input = parseInt(userInput[0]);
    
    let num=1;
    
    for(let i=0; i<input; i++){
        let s= '';
        for(let j=0; j<=i; j++,num++){
            s+= num+ " ";
        }
        console.log(s.trim());
    }
   
   });
    
    
    
    